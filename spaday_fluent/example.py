import asyncio
import logging

import transports
import uvicorn
from pydantic import BaseModel
from spaday import CallEndpoint, Invoke, Sequence, SetField, by_id, concat, cond, element, eq, event_prop, event_value, field, item, not_, obj
from spaday.backends.starlette import serve
from spaday.components.shell import App, Body, Each, Main, Nav, Row
from starlette.responses import JSONResponse
from starlette.routing import Route, WebSocketRoute

from spaday_fluent import (
    FluentAccordion,
    FluentAccordionItem,
    FluentAvatar,
    FluentBadge,
    FluentButton,
    FluentCheckbox,
    FluentCounterBadge,
    FluentDialog,
    FluentDialogBody,
    FluentDivider,
    FluentDrawer,
    FluentDrawerBody,
    FluentDropdown,
    FluentField,
    FluentLabel,
    FluentListbox,
    FluentMessageBar,
    FluentOption,
    FluentProgressBar,
    FluentRadio,
    FluentRadioGroup,
    FluentRatingDisplay,
    FluentSlider,
    FluentSwitch,
    FluentTab,
    FluentTablist,
    FluentText,
    FluentTextarea,
    FluentTextInput,
    FluentTooltip,
    package,
)

logger = logging.getLogger("uvicorn.error")

TEAM = {
    "Platform": ["Ada Lovelace", "Linus Torvalds", "Grace Hopper"],
    "Design": ["Dieter Rams", "Susan Kare"],
    "Data": ["Edgar Codd", "Barbara Liskov"],
}
PEOPLE = [person for members in TEAM.values() for person in members]
DEFAULT_OWNER = "Grace Hopper"
BADGE = {"To do": "informative", "In progress": "brand", "Done": "success"}
BACKLOG = [
    ("Rotate service certificates", "Linus Torvalds"),
    ("Redesign the empty states", "Susan Kare"),
    ("Backfill the events table", "Edgar Codd"),
    ("Profile the cold start", "Grace Hopper"),
    ("Audit colour contrast", "Dieter Rams"),
]


def task(number: int, title: str, owner: str, status: str = "To do", progress: int = 0, points: int = 3) -> dict:
    return {
        "id": f"T-{number}",
        "title": title,
        "owner": owner,
        "status": status,
        "color": BADGE[status],
        "progress": progress,
        "points": points,
    }


class SprintFeed(BaseModel):
    tasks: list[dict] = [
        task(201, "Ship the billing export", "Ada Lovelace", "In progress", 60, 5),
        task(202, "Sketch onboarding flow", "Dieter Rams", "In progress", 30),
        task(203, "Index the audit log", "Barbara Liskov", "To do", 0, 2),
        task(204, "Harden the upload API", "Grace Hopper", "To do", 0, 8),
        task(200, "Upgrade the build image", "Linus Torvalds", "Done", 100, 1),
    ]
    activity: list[dict] = [{"id": "a0", "text": "Sprint 42 started"}]
    presence: dict[str, str] = {person: "active" if index % 3 else "inactive" for index, person in enumerate(PEOPLE)}
    velocity: int = 0
    done_points: str = ""
    open_tasks: int = 0
    health: float = 4.0


feed = SprintFeed()
session = transports.Session()
session.host(feed)
server = transports.Server(session)


def refresh_totals() -> None:
    total = sum(row["points"] for row in feed.tasks)
    done = sum(row["points"] * row["progress"] / 100 for row in feed.tasks)
    feed.velocity = round(done / total * 100) if total else 0
    feed.done_points = f"{done:.0f} of {total} points"
    feed.open_tasks = sum(row["status"] != "Done" for row in feed.tasks)


refresh_totals()


def log(text: str) -> None:
    number = max(int(entry["id"].removeprefix("a")) for entry in feed.activity) + 1
    feed.activity = [{"id": f"a{number}", "text": text}, *feed.activity][:8]


def next_number() -> int:
    return max(int(row["id"].removeprefix("T-")) for row in feed.tasks) + 1


def update(task_id: str, **changes) -> None:
    feed.tasks = [{**row, **changes, "color": BADGE[changes.get("status", row["status"])]} if row["id"] == task_id else row for row in feed.tasks]


async def run_sprint() -> None:
    """Work in progress advances every tick, a waiting task gets picked up when nothing is moving, the
    backlog feeds new tasks in, and people come and go."""
    tick = 0
    while True:
        await asyncio.sleep(2)
        tick += 1
        for row in [row for row in feed.tasks if row["status"] == "In progress"]:
            progress = min(100, row["progress"] + 10 + tick % 3 * 5)
            update(row["id"], progress=progress, status="Done" if progress == 100 else "In progress")
            if progress == 100:
                log(f"{row['owner']} finished {row['id']}: {row['title']}")
        if sum(row["status"] == "In progress" for row in feed.tasks) < 2:
            waiting = next((row for row in feed.tasks if row["status"] == "To do"), None)
            if waiting:
                update(waiting["id"], status="In progress", progress=5)
                log(f"{waiting['owner']} picked up {waiting['id']}")
        if tick % 4 == 0:
            title, owner = BACKLOG[(tick // 4) % len(BACKLOG)]
            rows = [*feed.tasks, task(next_number(), title, owner)]
            done = [row for row in rows if row["status"] == "Done"]
            if len(rows) > 8 and done:
                rows.remove(done[0])
            feed.tasks = rows
            log(f"{owner} added {title.lower()}")
        person = PEOPLE[tick % len(PEOPLE)]
        feed.presence = {**feed.presence, person: "inactive" if feed.presence[person] == "active" else "active"}
        feed.health = round(3.5 + (tick % 4) * 0.5, 1)
        refresh_totals()


async def create_task(request):
    body = await request.json()
    logger.info("Task from browser: %s", body)
    title = (body.get("title") or "").strip()
    if not title:
        return JSONResponse({"message": "Give the task a title."}, status_code=422)
    owner = body.get("owner") or PEOPLE[0]
    points = int(float(body.get("points") or 1))
    row = task(next_number(), title, owner, points=points)
    feed.tasks = [*feed.tasks, row]
    log(f"You added {row['id']} for {owner}")
    refresh_totals()
    notify = f" and notified {owner.split()[0]}" if body.get("notify") else ""
    return JSONResponse({"message": f"Created {row['id']} ({points} points, {body.get('priority')} priority) for {owner}{notify}."})


async def complete_task(request):
    task_id = request.path_params["id"]
    row = next((row for row in feed.tasks if row["id"] == task_id), None)
    if row is None or row["status"] == "Done":
        return JSONResponse({"message": f"{task_id} is already done."}, status_code=409)
    update(task_id, status="Done", progress=100)
    log(f"You closed {task_id}: {row['title']}")
    refresh_totals()
    return JSONResponse({"message": f"Closed {task_id}"})


def stat(label: str, *body):
    return element("article", FluentText(size="200", weight="semibold", class_="stat-label").text(label), *body, class_="stat")


stats = Row(
    stat(
        "Sprint progress",
        FluentProgressBar(id="velocity", thickness="large", max=100).bind("value", "velocity"),
        FluentText(size="200").bind("textContent", "done_points"),
    ),
    stat(
        "Open tasks",
        FluentText(id="open-tasks", size="800", weight="bold", font="numeric").bind("textContent", "open_tasks"),
        FluentText(size="200").text("Not done yet, across the team"),
    ),
    stat(
        "Team health",
        FluentRatingDisplay(color="marigold", size="large").bind("value", "health"),
        FluentText(size="200").text("From the daily pulse survey"),
    ),
    gap="1rem",
    align="stretch",
    class_="stats",
)

board = element(
    "section",
    Each(
        element(
            "div",
            FluentAvatar(size=32).compute("name", item("owner")),
            element(
                "div",
                FluentText(weight="semibold").compute("textContent", concat(item("id"), " · ", item("title"))),
                FluentText(size="200").compute("textContent", concat(item("owner"), " · ", item("points"), " points")),
                FluentProgressBar(max=100).compute("value", item("progress")),
                class_="task-main",
            ),
            FluentBadge(appearance="tint").compute("color", item("color")).compute("textContent", item("status")),
            FluentButton(appearance="subtle", size="small")
            .text("Close")
            .compute("disabled", eq(item("status"), "Done"))
            .on("click", CallEndpoint("POST", concat("/api/tasks/", item("id"), "/complete"), result="closed")),
            class_="task",
        ).compute("data-id", item("id")),
        field="tasks",
        key="id",
    ),
    id="board",
    class_="board",
).compute("hidden", not_(eq(field("tab"), "board-tab")))

team = element(
    "section",
    FluentAccordion(
        *(
            FluentAccordionItem(
                element(
                    "div",
                    *(
                        element(
                            "div",
                            FluentAvatar(name=person, size=32).bind("active", f"presence.{person}"),
                            FluentText().text(person),
                            FluentBadge(appearance="tint")
                            .bind("textContent", f"presence.{person}")
                            .compute("color", cond(eq(field(f"presence.{person}"), "active"), "success", "subtle")),
                            class_="member",
                        )
                        for person in members
                    ),
                    class_="members",
                ),
                expanded=index == 0,
            ).child_in("heading", FluentText(weight="semibold").text(f"{squad} · {len(members)} people"))
            for index, (squad, members) in enumerate(TEAM.items())
        ),
        expand_mode="multi",
    ),
    id="team",
    class_="team",
).compute("hidden", not_(eq(field("tab"), "team-tab")))


def labelled(label: str, control, message: str | None = None):
    field_ = FluentField(label_position="above").child_in("label", FluentLabel().text(label)).child_in("input", control)
    return field_.child_in("message", FluentText(size="200").text(message)) if message else field_


new_task = element(
    "section",
    element(
        "div",
        labelled("Title", FluentTextInput(id="title", placeholder="What needs doing?").bind("value", "title", mode="two-way")),
        labelled(
            "Owner",
            # a dropdown's options live in a listbox. Setting a fluent-dropdown's value before that
            # listbox is assigned throws, so the initial choice is a default-selected option and the
            # store follows the dropdown's changes rather than driving it
            FluentDropdown(
                FluentListbox(*(FluentOption(value=person, default_selected=person == DEFAULT_OWNER).text(person) for person in PEOPLE)),
                id="owner",
                placeholder="Choose a teammate",
            ).on("change", SetField("owner", event_value())),
        ),
        labelled(
            "Priority",
            FluentRadioGroup(
                # each radio labelled by a field of its own, the way Fluent composes them
                *(
                    FluentField(label_position="after")
                    .child_in("label", FluentLabel().text(level.title()))
                    .child_in("input", FluentRadio(value=level))
                    for level in ("low", "normal", "high")
                ),
                orientation="horizontal",
                name="priority",
            )
            # Fluent reads its `value` attribute as `initialValue`; the live `value` checks nothing until
            # the radios are connected
            .prop("initialValue", "normal")
            .bind("value", "priority", mode="two-way"),
        ),
        labelled(
            "Estimate",
            FluentSlider(min="1", max="13", step="1").bind("value", "points", mode="two-way"),
            "Story points, 1 to 13",
        ),
        labelled("Notes", FluentTextarea(block=True, resize="vertical", placeholder="Context for the owner").bind("value", "notes", mode="two-way")),
        class_="form-grid",
    ),
    Row(
        FluentCheckbox(id="notify").bind("checked", "notify", mode="two-way"),
        FluentLabel().text("Notify the owner"),
        element("span", class_="spacer"),
        FluentButton(id="create", appearance="primary")
        .text("Create task")
        .on(
            "click",
            Sequence(
                CallEndpoint(
                    "POST",
                    "/api/tasks",
                    obj(
                        {
                            "title": field("title"),
                            "owner": field("owner"),
                            "priority": field("priority"),
                            "points": field("points"),
                            "notes": field("notes"),
                            "notify": field("notify"),
                        }
                    ),
                    result="created",
                ),
                Invoke(by_id("created"), "show"),
            ),
        ),
        gap=".5rem",
        class_="form-actions",
    ),
    id="new-task",
    class_="new-task",
).compute("hidden", not_(eq(field("tab"), "new-task-tab")))

created = FluentDialog(
    FluentDialogBody(FluentText(id="created-message").compute("textContent", field("created.body.message")))
    .child_in("title", FluentText(size="500", weight="semibold").text("Task created"))
    .child_in("action", FluentButton(id="created-done", appearance="primary").text("Done").on("click", Invoke(by_id("created"), "hide"))),
    id="created",
)

activity = FluentDrawer(
    FluentDrawerBody(
        Each(
            element("div", FluentText(size="300").compute("textContent", item("text")), FluentDivider(), class_="entry"),
            field="activity",
            key="id",
        ),
    )
    .child_in("title", FluentText(size="500", weight="semibold").text("Activity"))
    .child_in("close", FluentButton(appearance="transparent", **{"aria-label": "Close"}).text("✕").on("click", Invoke(by_id("activity"), "hide"))),
    id="activity",
    position="end",
    type="modal",
)

page = App(
    Nav(
        FluentText(size="500", weight="semibold").text("Sprint 42 hub"),
        Row(
            FluentButton(id="open-activity", appearance="outline").text("Activity").on("click", Invoke(by_id("activity"), "show")),
            FluentLabel().text("Dark theme"),
            FluentSwitch(id="dark").bind("checked", "dark", mode="two-way"),
            FluentTooltip(anchor="dark").text("Switches Fluent's theme and the spaday shell together"),
            gap=".75rem",
        ),
    ),
    Body(
        Main(
            element(
                "header",
                element("p", class_="eyebrow").text("SPADAY · FLUENT UI"),
                element(
                    "div",
                    element("h1").text("Sprint command center"),
                    FluentBadge(appearance="tint", color="success").text("Live sprint"),
                    class_="hero-title",
                ),
                element("p", class_="lede").text("Plan the work, follow team momentum, and keep Sprint 42 moving from one typed Python UI."),
                element(
                    "div",
                    element("span", "●", FluentText(size="200").text(" Streaming task updates")),
                    element("span", "42", FluentText(size="200").text(" Typed components")),
                    element("span", "↗", FluentText(size="200").text(" Browser-ready assets")),
                    class_="hero-meta",
                ),
                class_="hero",
            ),
            FluentMessageBar(intent="info", layout="singleline").text(
                "Tasks, activity and presence stream from Python; every control is a typed Fluent web component."
            ),
            stats,
            FluentTablist(
                # the tab's `end` slot, which Fluent's manifest leaves out
                FluentTab(id="board-tab").text("Board").child_in("end", FluentCounterBadge(color="brand", size="small").bind("count", "open_tasks")),
                FluentTab(id="team-tab").text("Team"),
                FluentTab(id="new-task-tab").text("New task"),
                id="tabs",
                activeid="board-tab",
            ).on("change", SetField("tab", event_prop("target.activeid"))),
            board,
            team,
            new_task,
            created,
            activity,
            class_="page",
        ),
    ),
).bind_root_class("wa-dark", "dark")

styles = """
<style>
  body { margin: 0; min-height: 100vh; font-family: var(--fontFamilyBase); background: radial-gradient(circle at 12% 0,
    color-mix(in srgb, var(--colorBrandBackground) 14%, transparent), transparent 30rem), var(--colorNeutralBackground2);
    color: var(--colorNeutralForeground1); }
  spa-nav { position: sticky; z-index: 20; top: 0; justify-content: space-between; border-bottom: 1px solid var(--colorNeutralStroke2);
    background: var(--colorNeutralBackground1); box-shadow: var(--shadow4); backdrop-filter: blur(14px); }
  .page { box-sizing: border-box; width: 100%; max-width: 78rem; margin: 0 auto; padding: 3.5rem 1.25rem 5rem;
    display: grid; align-content: start; gap: 1rem; }
  .hero { padding: 1rem 0 1.25rem; }
  .eyebrow { margin: 0; color: var(--colorBrandForeground1); font-size: .72rem; font-weight: 700; letter-spacing: .16em; }
  .hero-title { display: flex; align-items: center; gap: .85rem; margin-top: .4rem; }
  .hero h1 { margin: 0; font-size: clamp(2.5rem, 6vw, 4.8rem); line-height: .98; letter-spacing: -.055em; }
  .lede { max-width: 46rem; margin: 1rem 0; color: var(--colorNeutralForeground3); font-size: 1.08rem; line-height: 1.6; }
  .hero-meta { display: flex; flex-wrap: wrap; gap: .55rem; }
  .hero-meta > span { display: inline-flex; align-items: center; gap: .4rem; padding: .45rem .7rem; border: 1px solid var(--colorNeutralStroke2);
    border-radius: 999px; background: color-mix(in srgb, var(--colorNeutralBackground1) 92%, transparent); }
  fluent-message-bar { display: block; }
  .stats { flex-wrap: wrap; }
  .stat { flex: 1 1 14rem; display: grid; align-content: start; gap: .55rem; padding: 1.2rem;
    border: 1px solid var(--colorNeutralStroke2); border-radius: var(--borderRadiusXLarge); background: var(--colorNeutralBackground1);
    box-shadow: var(--shadow8); }
  .stat-label { color: var(--colorNeutralForeground3); }
  .board, .members { display: grid; gap: .5rem; }
  .task { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 1rem; padding: .75rem 1rem;
    border: 1px solid var(--colorNeutralStroke2); border-radius: var(--borderRadiusLarge); background: var(--colorNeutralBackground1);
    box-shadow: var(--shadow2); transition: transform .18s ease, box-shadow .18s ease; }
  .task:hover { transform: translateY(-1px); box-shadow: var(--shadow8); }
  .task-main { display: grid; gap: .25rem; min-width: 0; }
  .member { display: flex; align-items: center; gap: .75rem; }
  .member fluent-badge { margin-left: auto; }
  .team, .new-task { padding: 1.2rem; border: 1px solid var(--colorNeutralStroke2); border-radius: var(--borderRadiusXLarge);
    background: var(--colorNeutralBackground1); box-shadow: var(--shadow4); }
  .new-task { display: grid; gap: 1rem; }
  .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem 1.5rem; }
  [hidden] { display: none !important; }
  .form-grid > fluent-field, .form-grid > fluent-field > [slot="input"] { width: 100%; max-width: none; }
  fluent-radio-group { gap: 1rem; }
  .form-actions .spacer { flex: 1; }
  .entry { display: grid; gap: .5rem; padding-block: .25rem; }
  @media (max-width: 720px) {
    .page { padding: 1.75rem .75rem 3rem; }
    .hero-title { align-items: flex-start; flex-direction: column; }
    .form-grid { grid-template-columns: 1fr; }
    .task { grid-template-columns: auto 1fr; }
    .task fluent-badge, .task fluent-button { grid-column: 2; justify-self: start; }
  }
</style>
"""

initial_store = {
    "dark": False,
    "title": "Write the release notes",
    "owner": DEFAULT_OWNER,
    "priority": "normal",
    "points": "3",
    "notes": "",
    "notify": True,
    "tab": "board-tab",
    "created": {"body": {"message": ""}},
    "closed": {},
}

app = serve(
    page,
    packages=[package],
    wire="transports",
    routes=[
        WebSocketRoute("/ws", transports.ws_endpoint(server)),
        Route("/api/tasks", create_task, methods=["POST"]),
        Route("/api/tasks/{id}/complete", complete_task, methods=["POST"]),
    ],
    background=[transports.autosync(server), run_sprint()],
    store=initial_store,
    head=styles,
    title="spaday-fluent example",
)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8024)

"""Gallery of every Fluent component wrapped by spaday-fluent."""

from __future__ import annotations

import io
import keyword
import textwrap
import tokenize

from spaday import Invoke, by_id, element
from spaday.backends.starlette import serve

from . import components as fluent, package

COMPONENT_SNIPPETS: list[str] = []


def _snippet(names: str, body: str) -> str:
    source = f"from spaday_fluent import {names}\n\n{textwrap.dedent(body).strip()}\n"
    COMPONENT_SNIPPETS.append(source)
    return source


def _offsets(source: str) -> list[int]:
    offsets = [0]
    for line in source.splitlines(keepends=True):
        offsets.append(offsets[-1] + len(line))
    return offsets


def _code(source: str):
    """Render a dependency-free highlighted Python code block."""
    offsets = _offsets(source)
    children = []
    cursor = 0
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type == tokenize.ENDMARKER:
            continue
        start = offsets[token.start[0] - 1] + token.start[1]
        end = offsets[token.end[0] - 1] + token.end[1]
        if start > cursor:
            children.append(source[cursor:start])
        token_class = None
        if token.type == tokenize.NAME and keyword.iskeyword(token.string):
            token_class = "keyword"
        elif token.type == tokenize.STRING:
            token_class = "string"
        elif token.type == tokenize.NUMBER:
            token_class = "number"
        elif token.type == tokenize.COMMENT:
            token_class = "comment"
        elif token.type == tokenize.OP:
            token_class = "operator"
        children.append(element("span", class_=f"token-{token_class}").text(token.string) if token_class else token.string)
        cursor = end
    if cursor < len(source):
        children.append(source[cursor:])
    return element("pre", element("code", *children), class_="code-block")


def _demo(title: str, description: str, source: str, preview):
    return element(
        "article",
        element(
            "header",
            element("div", element("h3").text(title), element("p").text(description)),
            fluent.FluentBadge(appearance="tint", color="brand").text("Python"),
            class_="demo-heading",
        ),
        element("div", preview, class_="preview"),
        element("div", _code(source), class_="source"),
        class_="gallery-card",
    )


def _section(section_id: str, title: str, description: str, *cards):
    return element(
        "section",
        element("header", element("p", class_="section-label").text(section_id.upper()), element("h2").text(title), element("p").text(description)),
        element("div", *cards, class_="gallery-grid"),
        id=section_id,
        class_="gallery-section",
    )


actions = _section(
    "actions",
    "Actions",
    "Primary commands, links, compound actions, and persistent toggles.",
    _demo(
        "Button family",
        "Choose button emphasis and add supporting descriptions when a command needs context.",
        _snippet(
            "FluentAnchorButton, FluentButton, FluentCompoundButton, FluentToggleButton",
            """
            actions = (
                FluentButton(appearance="primary").text("Create task"),
                FluentAnchorButton(href="#content").text("View content"),
                FluentCompoundButton(appearance="outline")
                    .text("Publish")
                    .child_in("description", "Visible to the team"),
                FluentToggleButton(pressed=True).text("Pinned"),
            )
            """,
        ),
        element(
            "div",
            fluent.FluentButton(appearance="primary").text("Create task"),
            fluent.FluentAnchorButton(href="#content").text("View content"),
            fluent.FluentCompoundButton(appearance="outline").text("Publish").child_in("description", "Visible to the team"),
            fluent.FluentToggleButton(pressed=True).text("Pinned"),
            class_="inline-preview",
        ),
    ),
    _demo(
        "Identity and status",
        "Pair people with concise status and count indicators.",
        _snippet(
            "FluentAvatar, FluentBadge, FluentCounterBadge",
            """
            owner = FluentAvatar(name="Grace Hopper", active="active", size=40)
            status = FluentBadge(appearance="tint", color="success").text("On track")
            count = FluentCounterBadge(count=12, color="brand")
            """,
        ),
        element(
            "div",
            fluent.FluentAvatar(name="Grace Hopper", active="active", size=40),
            fluent.FluentBadge(appearance="tint", color="success").text("On track"),
            fluent.FluentCounterBadge(count=12, color="brand"),
            class_="inline-preview",
        ),
    ),
)

forms = _section(
    "forms",
    "Forms and selection",
    "Labels, validation structure, text entry, ranges, and explicit choices.",
    _demo(
        "Text fields",
        "Compose labels, controls, and supporting messages with Fluent field slots.",
        _snippet(
            "FluentField, FluentLabel, FluentText, FluentTextarea, FluentTextInput",
            """
            title = FluentField(label_position="above") \\
                .child_in("label", FluentLabel(required=True).text("Title")) \\
                .child_in("input", FluentTextInput(value="Plan the retro")) \\
                .child_in("message", FluentText(size="200").text("Keep it concise"))
            notes = FluentTextarea(block=True, rows=3, value="Invite the whole team")
            """,
        ),
        element(
            "div",
            fluent.FluentField(label_position="above")
            .child_in("label", fluent.FluentLabel(required=True).text("Title"))
            .child_in("input", fluent.FluentTextInput(value="Plan the retro"))
            .child_in("message", fluent.FluentText(size="200").text("Keep it concise")),
            fluent.FluentTextarea(block=True, rows=3, value="Invite the whole team", **{"aria-label": "Notes"}),
            class_="form-preview",
        ),
    ),
    _demo(
        "Controls",
        "Capture boolean choices and numeric ranges with compact controls.",
        _snippet(
            "FluentCheckbox, FluentSlider, FluentSwitch",
            """
            notify = FluentCheckbox(checked=True)
            estimate = FluentSlider(min="1", max="13", step="1", value="5")
            automatic = FluentSwitch(checked=True)
            """,
        ),
        element(
            "div",
            element("label", fluent.FluentCheckbox(checked=True), " Notify owner"),
            element("label", "Estimate", fluent.FluentSlider(min="1", max="13", step="1", value="5")),
            element("label", fluent.FluentSwitch(checked=True), " Automatic updates"),
            class_="form-preview selection-preview",
        ),
    ),
    _demo(
        "Choice groups",
        "Offer mutually exclusive radio choices or a compact dropdown list.",
        _snippet(
            "FluentDropdown, FluentListbox, FluentOption, FluentRadio, FluentRadioGroup",
            """
            priority = FluentRadioGroup(
                FluentRadio(value="normal", checked=True),
                FluentRadio(value="high"),
                orientation="horizontal",
            )
            owner = FluentDropdown(
                FluentListbox(
                    FluentOption(value="grace", selected=True).text("Grace Hopper"),
                    FluentOption(value="ada").text("Ada Lovelace"),
                ),
                placeholder="Choose an owner",
            )
            """,
        ),
        element(
            "div",
            fluent.FluentRadioGroup(
                element("label", fluent.FluentRadio(value="normal", checked=True), " Normal"),
                element("label", fluent.FluentRadio(value="high"), " High"),
                orientation="horizontal",
                **{"aria-label": "Priority"},
            ),
            fluent.FluentDropdown(
                fluent.FluentListbox(
                    fluent.FluentOption(value="grace", selected=True).text("Grace Hopper"),
                    fluent.FluentOption(value="ada").text("Ada Lovelace"),
                ),
                placeholder="Choose an owner",
                **{"aria-label": "Owner"},
            ),
            class_="form-preview",
        ),
    ),
)

content = _section(
    "content",
    "Content and disclosure",
    "Typography, media, separators, and expandable detail.",
    _demo(
        "Text and media",
        "Apply Fluent typography while keeping images responsive.",
        _snippet(
            "FluentDivider, FluentImage, FluentLink, FluentText",
            """
            from spaday import element

            title = FluentText(size="600", weight="semibold").text("Sprint review")
            image = FluentImage(
                element("img", src="team.svg", alt="Abstract team illustration"),
                bordered=True,
            )
            divider = FluentDivider()
            link = FluentLink(href="#navigation").text("Explore navigation")
            """,
        ),
        element(
            "div",
            fluent.FluentText(size="600", weight="semibold").text("Sprint review"),
            fluent.FluentImage(
                element(
                    "img",
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='220'%3E%3Cdefs%3E%3ClinearGradient id='g'%3E%3Cstop stop-color='%230f6cbd'/%3E%3Cstop offset='1' stop-color='%237a41cc'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='640' height='220' rx='24' fill='url(%23g)'/%3E%3Ccircle cx='120' cy='110' r='48' fill='%23fff' fill-opacity='.9'/%3E%3Ccircle cx='240' cy='110' r='34' fill='%23fff' fill-opacity='.65'/%3E%3Cpath d='M320 80h220M320 112h170M320 144h200' stroke='%23fff' stroke-width='14' stroke-linecap='round'/%3E%3C/svg%3E",
                    alt="Abstract team illustration",
                ),
                bordered=True,
                block=True,
                fit="cover",
                class_="gallery-image",
            ),
            fluent.FluentDivider(),
            fluent.FluentLink(href="#navigation").text("Explore navigation"),
            class_="stack",
        ),
    ),
    _demo(
        "Accordion",
        "Reveal supporting detail without leaving the current context.",
        _snippet(
            "FluentAccordion, FluentAccordionItem",
            """
            faq = FluentAccordion(
                FluentAccordionItem("Six open tasks", expanded=True)
                    .child_in("heading", "What is in this sprint?"),
                expand_mode="single",
            )
            """,
        ),
        fluent.FluentAccordion(
            fluent.FluentAccordionItem("Six open tasks", expanded=True).child_in("heading", "What is in this sprint?"),
            fluent.FluentAccordionItem("Friday at 2 PM").child_in("heading", "When is the review?"),
            expand_mode="single",
        ),
    ),
)

navigation = _section(
    "navigation",
    "Navigation",
    "Menus, tabs, and hierarchical navigation for application surfaces.",
    _demo(
        "Menu",
        "Keep secondary commands available without crowding the primary interface.",
        _snippet(
            "FluentMenu, FluentMenuButton, FluentMenuItem, FluentMenuList",
            """
            menu = FluentMenu(
                FluentMenuList(
                    FluentMenuItem().text("Duplicate"),
                    FluentMenuItem().text("Archive"),
                )
            ).child_in("trigger", FluentMenuButton().text("More actions"))
            """,
        ),
        fluent.FluentMenu(
            fluent.FluentMenuList(
                fluent.FluentMenuItem().text("Duplicate"),
                fluent.FluentMenuItem().text("Archive"),
            )
        ).child_in("trigger", fluent.FluentMenuButton().text("More actions")),
    ),
    _demo(
        "Tabs",
        "Switch among peer views while preserving a compact information hierarchy.",
        _snippet(
            "FluentTab, FluentTablist",
            """
            tabs = FluentTablist(
                FluentTab(id="overview-tab").text("Overview"),
                FluentTab(id="activity-tab").text("Activity"),
                activeid="overview-tab",
            )
            """,
        ),
        fluent.FluentTablist(
            fluent.FluentTab(id="gallery-overview-tab").text("Overview"),
            fluent.FluentTab(id="gallery-activity-tab").text("Activity"),
            activeid="gallery-overview-tab",
        ),
    ),
    _demo(
        "Tree",
        "Represent nested project structure with selectable branches.",
        _snippet(
            "FluentTree, FluentTreeItem",
            """
            tree = FluentTree(
                FluentTreeItem(
                    FluentTreeItem().text("API"),
                    FluentTreeItem().text("Web"),
                    expanded=True,
                ).text("Services")
            )
            """,
        ),
        fluent.FluentTree(
            fluent.FluentTreeItem(
                fluent.FluentTreeItem().text("API"),
                fluent.FluentTreeItem().text("Web"),
                expanded=True,
            ).text("Services"),
            fluent.FluentTreeItem().text("Design system"),
        ),
    ),
)

feedback = _section(
    "feedback",
    "Feedback",
    "Communicate status, progress, loading, and lightweight sentiment.",
    _demo(
        "Status and progress",
        "Combine prominent messages with determinate and indeterminate progress.",
        _snippet(
            "FluentMessageBar, FluentProgressBar, FluentRatingDisplay, FluentSpinner",
            """
            message = FluentMessageBar(intent="success").text("Sprint is on track")
            progress = FluentProgressBar(value=72, max=100, thickness="large")
            loading = FluentSpinner(size="medium")
            health = FluentRatingDisplay(value=4.5, color="marigold")
            """,
        ),
        element(
            "div",
            fluent.FluentMessageBar(intent="success").text("Sprint is on track"),
            fluent.FluentProgressBar(value=72, max=100, thickness="large"),
            element("div", fluent.FluentSpinner(size="medium"), fluent.FluentRatingDisplay(value=4.5, color="marigold"), class_="inline-preview"),
            class_="stack",
        ),
    ),
)

overlays = _section(
    "overlays",
    "Overlays",
    "Focused dialogs, supporting drawers, and contextual help.",
    _demo(
        "Dialog",
        "Ask for focused confirmation while keeping the surrounding workflow visible.",
        _snippet(
            "FluentDialog, FluentDialogBody",
            """
            dialog = FluentDialog(
                FluentDialogBody("Your changes are ready")
                    .child_in("title", "Publish sprint plan"),
                id="publish-dialog",
            )
            """,
        ),
        element(
            "div",
            fluent.FluentButton(appearance="primary").text("Open dialog").on("click", Invoke(by_id("gallery-dialog"), "show")),
            fluent.FluentDialog(
                fluent.FluentDialogBody("Your changes are ready")
                .child_in("title", fluent.FluentText(size="500", weight="semibold").text("Publish sprint plan"))
                .child_in("action", fluent.FluentButton().text("Close").on("click", Invoke(by_id("gallery-dialog"), "hide"))),
                id="gallery-dialog",
            ),
            class_="inline-preview",
        ),
    ),
    _demo(
        "Drawer and tooltip",
        "Place secondary activity beside the page and explain unfamiliar controls on demand.",
        _snippet(
            "FluentButton, FluentDrawer, FluentDrawerBody, FluentTooltip",
            """
            drawer = FluentDrawer(
                FluentDrawerBody("Recent activity").child_in("title", "Activity"),
                id="activity-drawer",
                position="end",
            )
            help_text = FluentTooltip(anchor="help-button").text("About this view")
            """,
        ),
        element(
            "div",
            fluent.FluentButton().text("Open drawer").on("click", Invoke(by_id("gallery-drawer"), "show")),
            fluent.FluentDrawer(
                fluent.FluentDrawerBody("Recent activity appears here")
                .child_in("title", fluent.FluentText(size="500", weight="semibold").text("Activity"))
                .child_in("close", fluent.FluentButton().text("Close").on("click", Invoke(by_id("gallery-drawer"), "hide"))),
                id="gallery-drawer",
                position="end",
            ),
            fluent.FluentButton(id="gallery-help", appearance="subtle").text("Help"),
            fluent.FluentTooltip(anchor="gallery-help").text("About this view"),
            class_="inline-preview",
        ),
    ),
)

page = element(
    "main",
    element(
        "header",
        element("p", class_="eyebrow").text("SPADAY · FLUENT UI"),
        element("h1").text("Component gallery"),
        element("p", class_="lede").text("Every Fluent web component currently wrapped by spaday-fluent, with runnable Python."),
        element(
            "nav",
            *(
                element("a", href=f"#{name}").text(label)
                for name, label in [
                    ("actions", "Actions"),
                    ("forms", "Forms"),
                    ("content", "Content"),
                    ("navigation", "Navigation"),
                    ("feedback", "Feedback"),
                    ("overlays", "Overlays"),
                ]
            ),
            aria_label="Gallery sections",
            class_="section-nav",
        ),
        class_="hero",
    ),
    actions,
    forms,
    content,
    navigation,
    feedback,
    overlays,
    element("footer").text(f"Generated components: {len(fluent.__all__)} Fluent elements · Python runs locally in Pyodide"),
    class_="gallery-page",
)

styles = """
<style>
  :root { color-scheme: light; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: radial-gradient(circle at 12% 0, color-mix(in srgb, var(--colorBrandBackground) 15%, transparent),
    transparent 30rem), var(--colorNeutralBackground2); color: var(--colorNeutralForeground1); font-family: var(--fontFamilyBase), system-ui, sans-serif; }
  .gallery-page { box-sizing: border-box; width: min(100%, 92rem); margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
  .hero { padding: 2rem 0 1rem; }
  .eyebrow, .section-label { margin: 0; color: var(--colorBrandForeground1); font-size: .72rem; font-weight: 700; letter-spacing: .16em; }
  h1 { margin: .35rem 0 0; font-size: clamp(2.4rem, 6vw, 4.75rem); letter-spacing: -.055em; line-height: .98; }
  .lede { max-width: 48rem; margin: 1rem 0 1.5rem; color: var(--colorNeutralForeground3); font-size: 1.08rem; line-height: 1.6; }
  .section-nav { display: flex; flex-wrap: wrap; gap: .5rem; }
  .section-nav a { padding: .45rem .75rem; border: 1px solid var(--colorNeutralStroke2); border-radius: 999px;
    color: var(--colorNeutralForeground2); text-decoration: none; background: color-mix(in srgb, var(--colorNeutralBackground1) 92%, transparent); }
  .section-nav a:hover { border-color: var(--colorBrandStroke1); color: var(--colorBrandForeground1); }
  .gallery-section { scroll-margin-top: 4rem; padding: 3rem 0 1rem; }
  .gallery-section > header { max-width: 44rem; margin-bottom: 1.25rem; }
  .gallery-section h2 { margin: .3rem 0 .4rem; font-size: 2rem; letter-spacing: -.03em; }
  .gallery-section > header > p:last-child { margin: 0; color: var(--colorNeutralForeground3); }
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 27rem), 1fr)); gap: 1rem; align-items: start; }
  .gallery-card { display: block; min-width: 0; padding: 1.15rem; border: 1px solid var(--colorNeutralStroke2); border-radius: 1rem;
    background: var(--colorNeutralBackground1); box-shadow: var(--shadow8); }
  .demo-heading { display: flex; align-items: start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
  .demo-heading > div { min-width: 0; }
  .demo-heading > fluent-badge { flex: 0 0 auto; }
  .demo-heading h3 { margin: 0; font-size: 1.05rem; }
  .demo-heading p { margin: .3rem 0 0; color: var(--colorNeutralForeground3); font-size: .88rem; line-height: 1.45; }
  .preview { box-sizing: border-box; min-height: 8.5rem; margin-bottom: 1rem; padding: 1.25rem; border: 1px solid var(--colorNeutralStroke2);
    border-radius: .75rem; background: var(--colorNeutralBackground3); overflow: auto; }
  .preview > * { max-width: 100%; }
  .source { min-width: 0; }
  .code-block { box-sizing: border-box; max-height: 18rem; margin: 0; padding: 1rem; overflow: auto; border-radius: .75rem;
    color: #dbeafe; background: #172033; font: .78rem/1.6 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    tab-size: 4; white-space: pre; }
  .token-keyword { color: #c4b5fd; } .token-string { color: #86efac; } .token-number { color: #fcd34d; }
  .token-comment { color: #94a3b8; font-style: italic; } .token-operator { color: #7dd3fc; }
  .inline-preview { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem; }
  .stack, .form-preview { display: grid; gap: .8rem; }
  .form-preview > fluent-field, .form-preview > fluent-field > [slot="input"] { width: 100%; max-width: none; }
  .selection-preview label { display: flex; align-items: center; gap: .55rem; }
  .selection-preview fluent-slider { flex: 1; min-width: 12rem; }
  .gallery-image { display: block; width: 100%; height: 8rem; border-radius: .5rem; overflow: hidden; }
  .gallery-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
  footer { margin-top: 4rem; padding-top: 1.5rem; border-top: 1px solid var(--colorNeutralStroke2);
    color: var(--colorNeutralForeground3); font-size: .85rem; }
  @media (max-width: 600px) { .gallery-page { padding-inline: .75rem; } .gallery-section { padding-top: 2rem; }
    .preview { padding: .9rem; } }
</style>
"""

app = serve(page, packages=[package], head=styles, title="spaday-fluent gallery")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8025)

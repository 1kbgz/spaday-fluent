import asyncio

import httpx
import pytest

from spaday_fluent import example


async def request(method: str, path: str, **kwargs):
    transport = httpx.ASGITransport(app=example.app)
    async with httpx.AsyncClient(transport=transport, base_url="http://example") as client:
        return await client.request(method, path, **kwargs)


def run_ticks(monkeypatch, ticks: int):
    """Run the sprint loop for ``ticks`` iterations."""
    sleeps = 0

    class Done(Exception):
        pass

    async def sleep(_delay):
        nonlocal sleeps
        sleeps += 1
        if sleeps > ticks:
            raise Done

    monkeypatch.setattr(example.asyncio, "sleep", sleep)
    with pytest.raises(Done):
        asyncio.run(example.run_sprint())


def test_example_serves_the_hub():
    response = asyncio.run(request("GET", "/tree.json"))
    assert response.status_code == 200
    for tag in ("fluent-tablist", "fluent-dropdown", "fluent-radio-group", "fluent-dialog", "fluent-drawer", "spa-each"):
        assert tag in response.text


def test_sprint_moves_work_and_feeds_the_backlog(monkeypatch):
    progress = {row["id"]: row["progress"] for row in example.feed.tasks if row["status"] == "In progress"}
    arriving = f"T-{example.next_number()}"
    presence = dict(example.feed.presence)
    run_ticks(monkeypatch, 4)
    now = {row["id"]: row for row in example.feed.tasks}
    assert all(now[task_id]["progress"] > before for task_id, before in progress.items() if task_id in now)
    assert now[arriving]["status"] in ("To do", "In progress")  # every fourth tick the backlog adds one
    assert example.feed.presence != presence
    assert example.feed.activity[0]["text"]
    assert example.feed.open_tasks == sum(row["status"] != "Done" for row in example.feed.tasks)


def test_creating_a_task_adds_it_and_logs_it():
    response = asyncio.run(
        request(
            "POST",
            "/api/tasks",
            json={"title": "Draft the RFC", "owner": "Susan Kare", "priority": "high", "points": "5", "notes": "", "notify": True},
        )
    )
    assert response.status_code == 200
    row = example.feed.tasks[-1]
    assert (row["title"], row["owner"], row["points"], row["status"]) == ("Draft the RFC", "Susan Kare", 5, "To do")
    assert response.json()["message"] == f"Created {row['id']} (5 points, high priority) for Susan Kare and notified Susan."
    assert example.feed.activity[0]["text"] == f"You added {row['id']} for Susan Kare"
    assert asyncio.run(request("POST", "/api/tasks", json={"title": " "})).status_code == 422


def test_closing_a_task_finishes_it_once():
    open_task = next(row for row in example.feed.tasks if row["status"] != "Done")
    response = asyncio.run(request("POST", f"/api/tasks/{open_task['id']}/complete"))
    assert response.json() == {"message": f"Closed {open_task['id']}"}
    closed = next(row for row in example.feed.tasks if row["id"] == open_task["id"])
    assert (closed["status"], closed["progress"], closed["color"]) == ("Done", 100, "success")
    assert asyncio.run(request("POST", f"/api/tasks/{open_task['id']}/complete")).status_code == 409

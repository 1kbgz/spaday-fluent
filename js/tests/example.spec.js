import { expect, test } from "@playwright/test";

/* The sprint hub in spaday_fluent/example.py, run as its own server. */

const PAGE = "http://127.0.0.1:8024";

test("streams the sprint from Python onto the board", async ({ page }) => {
  await page.goto(PAGE);
  const tasks = page.locator(".task");
  await expect(tasks.first()).toBeVisible();
  const ids = () => tasks.evaluateAll((rows) => rows.map((r) => r.dataset.id));
  const initial = await ids();
  // the backlog feeds a new task in every few seconds
  await expect
    .poll(async () => (await ids()).some((id) => !initial.includes(id)), {
      timeout: 12_000,
    })
    .toBe(true);
});

test("closes a task through Python", async ({ page }) => {
  await page.goto(PAGE);
  const open = page
    .locator(".task")
    .filter({ has: page.locator("fluent-button:not([disabled])") })
    .first();
  const id = await open.getAttribute("data-id");
  await open.locator("fluent-button").click();
  const row = page.locator(`.task[data-id="${id}"]`);
  await expect(row.locator("fluent-badge")).toHaveText("Done");
  await expect(row.locator("fluent-button")).toHaveAttribute("disabled");
  await page.locator("#open-activity").click();
  await expect(page.locator("#activity")).toContainText(`You closed ${id}`);
});

test("tabs show one panel at a time", async ({ page }) => {
  await page.goto(PAGE);
  await expect(page.locator("#board")).toBeVisible();
  await page.locator("#team-tab").click();
  await expect(page.locator("#team")).toBeVisible();
  await expect(page.locator("#board")).toBeHidden();
  await expect(page.locator("#team")).toContainText("Grace Hopper");
});

test("team avatars and labels stay aligned on narrow screens", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto(PAGE);
  await page.locator("#team-tab").click();

  const geometry = await page
    .locator(".members")
    .first()
    .evaluate((members) => {
      const bounds = members.getBoundingClientRect();
      const rows = [...members.querySelectorAll(".member")].map((row) => {
        const rowBounds = row.getBoundingClientRect();
        const nameBounds = row
          .querySelector("fluent-text")
          .getBoundingClientRect();
        const badgeBounds = row
          .querySelector("fluent-badge")
          .getBoundingClientRect();
        return {
          top: rowBounds.top,
          bottom: rowBounds.bottom,
          nameLeft: nameBounds.left,
          badgeRight: badgeBounds.right,
        };
      });
      return {
        topInset: rows[0].top - bounds.top,
        bottomInset: bounds.bottom - rows.at(-1).bottom,
        rowGaps: rows
          .slice(1)
          .map((row, index) => row.top - rows[index].bottom),
        nameLefts: rows.map((row) => Math.round(row.nameLeft)),
        badgeRights: rows.map((row) => Math.round(row.badgeRight)),
      };
    });

  expect(geometry.topInset).toBeGreaterThanOrEqual(8);
  expect(geometry.bottomInset).toBeGreaterThanOrEqual(8);
  expect(Math.min(...geometry.rowGaps)).toBeGreaterThanOrEqual(12);
  expect(new Set(geometry.nameLefts).size).toBe(1);
  expect(new Set(geometry.badgeRights).size).toBe(1);
});

test("creates a task from the form and confirms it in a dialog", async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.locator("#new-task-tab").click();
  await expect(page.locator("#owner")).toHaveJSProperty(
    "value",
    "Grace Hopper",
  );
  await page.locator("#title input").fill("Plan the retro");
  await page
    .locator("fluent-radio-group fluent-field", { hasText: "High" })
    .locator("fluent-radio")
    .click();
  await page.locator("#create").click();
  const message = page.locator("#created-message");
  await expect(message).toContainText("high priority) for Grace Hopper");
  const id = (await message.textContent()).split(" ")[1];
  await page.locator("#created-done").click();
  await page.locator("#board-tab").click();
  await expect(page.locator(`.task[data-id="${id}"]`)).toContainText(
    "Plan the retro",
  );
});

test("the dark switch re-themes Fluent and the spaday shell together", async ({
  page,
}) => {
  await page.goto(PAGE);
  const token = () =>
    page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--colorNeutralBackground1")
        .trim(),
    );
  const light = await token();
  await page.locator("#dark").click();
  await expect(page.locator("html")).toHaveClass(/wa-dark/);
  expect(await token()).not.toBe(light);
  const nav = await page
    .locator("spa-nav")
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(
    await page.evaluate(() => {
      const probe = document.createElement("div");
      probe.style.color = "var(--colorNeutralBackground1)";
      document.body.append(probe);
      return getComputedStyle(probe).color;
    }),
  ).toBe(nav);
});

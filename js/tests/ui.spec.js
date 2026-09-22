import { expect, test } from "@playwright/test";

const PAGE = "http://127.0.0.1:8032";
const input = (page, id) => page.locator(`#${id} input`).last();
const textarea = (page, id) => page.locator(`#${id} textarea`).last();

test("renders Fluent controls and explicit native fallbacks", async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.locator("#dialog").waitFor({ state: "attached" });
  expect(
    await page.evaluate(() =>
      [
        "save",
        "name",
        "notes",
        "count",
        "date",
        "agree",
        "dark",
        "plan",
        "priority",
        "volume",
        "alert",
        "progress",
        "dialog",
      ].map((id) => document.getElementById(id).localName),
    ),
  ).toEqual([
    "fluent-button",
    "fluent-text-input",
    "fluent-textarea",
    "input",
    "input",
    "fluent-checkbox",
    "fluent-switch",
    "fluent-dropdown",
    "fluent-radio-group",
    "fluent-slider",
    "fluent-message-bar",
    "fluent-progress-bar",
    "fluent-dialog",
  ]);
  await expect(page.locator("[data-ui-fallback]")).toHaveCount(2);
  await expect(page.locator("#count")).toHaveAttribute(
    "data-ui-fallback",
    "native",
  );
  await expect(page.locator("#date")).toHaveAttribute(
    "data-ui-fallback",
    "native",
  );
});

test("every value control round-trips through the store", async ({ page }) => {
  await page.goto(PAGE);
  const state = page.locator("#state");
  await expect(state).toHaveText(
    "||2|2026-09-14|false|false|basic|1|5|25|false|false",
  );
  await input(page, "name").fill("Ada");
  await textarea(page, "notes").fill("Ready");
  await page.locator("#count").fill("4");
  await page.locator("#date").fill("2026-10-01");
  await page.locator("#agree").click();
  await page.locator("#dark").click();
  await page.getByRole("radio", { name: "High" }).click();
  await page.locator("#volume").evaluate((element) => {
    element.value = 8;
    element.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await expect(state).toHaveText(
    "Ada|Ready|4|2026-10-01|true|true|basic|2|8|25|false|false",
  );
  await page.locator("#save").click();
  await expect(state).toContainText("|true|false");
  await page.locator("#reset").click();
  await expect(state).toHaveText(
    "|Ready|4|2026-10-01|true|true|basic|2|8|25|false|false",
  );
});

test("the dropdown updates its bound value", async ({ page }) => {
  await page.goto(PAGE);
  await page.locator("#plan").click();
  await page.getByRole("option", { name: "Plus" }).click();
  await expect(page.locator("#state")).toContainText("|plus|");
});

test("dialog methods round-trip nested native state", async ({ page }) => {
  await page.goto(PAGE);
  const isOpen = () =>
    page.locator("#dialog").evaluate((element) => element.dialog.open);
  await expect.poll(isOpen).toBe(false);
  await page.locator("#open").click();
  await expect.poll(isOpen).toBe(true);
  await page.locator("#close").click();
  await expect.poll(isOpen).toBe(false);
  await page.locator("#open").click();
  await expect.poll(isOpen).toBe(true);
  await page.keyboard.press("Escape");
  await expect.poll(isOpen).toBe(false);
  await expect(page.locator("#state")).toHaveText(
    "||2|2026-09-14|false|false|basic|1|5|25|false|false",
  );
});

test("labels, help, errors, feedback and disabled state render", async ({
  page,
}) => {
  await page.goto(PAGE);
  await expect(page.getByText("Your name")).toBeVisible();
  await expect(page.getByText("Required")).toBeVisible();
  await expect(page.getByText("High")).toBeVisible();
  await expect(page.locator("#never")).toHaveJSProperty("disabled", true);
  await expect(page.locator("#save")).toHaveText("Save");
  await expect(page.locator("#save")).toHaveAttribute("appearance", "primary");
  await expect(page.locator("#alert")).toContainText("Portable");
  await expect(page.locator("#progress")).toHaveJSProperty("value", 25);
});

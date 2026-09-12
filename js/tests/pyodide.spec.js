import fs from "fs";
import { expect, test } from "@playwright/test";

const built = fs.existsSync("dist/lite/index.html");

async function renderedComponentTags(page, prefix, structuralTags = []) {
  return page.locator("body").evaluate(
    (body, { prefix, structuralTags }) => {
      const components = [...body.querySelectorAll("*")].filter((element) =>
        element.localName.startsWith(prefix),
      );
      const tags = [...new Set(components.map((element) => element.localName))];
      const structural = new Set(structuralTags);
      const unrendered = tags.filter(
        (tag) =>
          !structural.has(tag) &&
          !components
            .filter((element) => element.localName === tag)
            .some((element) => {
              const bounds = element.getBoundingClientRect();
              return bounds.width > 0 && bounds.height > 0;
            }),
      );
      return { count: tags.length, unrendered };
    },
    { prefix, structuralTags },
  );
}

async function waitForPython(page) {
  await page.waitForFunction(
    () =>
      document.documentElement.dataset.ready === "true" ||
      document.querySelector("#pyodide-status")?.textContent ===
        "Unable to start",
    undefined,
    { timeout: 150_000 },
  );
  await expect(page.locator("html")).toHaveAttribute("data-ready", "true");
}

test("runs the complete example in Pyodide", async ({ page }) => {
  test.skip(!built, "run `make pyodide-example` first");
  test.setTimeout(180_000);

  await page.goto("/dist/lite/index.html");
  await waitForPython(page);
  await expect(page.locator("h1")).toHaveText("Sprint command center");
  const tasks = page.locator(".task");
  await expect(tasks.first()).toBeVisible();
  const initial = await tasks.count();
  await expect
    .poll(() => tasks.count(), { timeout: 12_000 })
    .toBeGreaterThan(initial);

  const open = tasks
    .filter({ has: page.locator("fluent-button:not([disabled])") })
    .first();
  const id = await open.getAttribute("data-id");
  await open.locator("fluent-button").click();
  await expect(page.locator(`.task[data-id="${id}"] fluent-badge`)).toHaveText(
    "Done",
  );
});

test("runs the component gallery in Pyodide", async ({ page }) => {
  test.skip(!built, "run `make pyodide-example` first");
  test.setTimeout(180_000);

  await page.goto("/dist/lite/?example=gallery");
  await waitForPython(page);
  await expect(page.locator("h1")).toHaveText("Component gallery");
  expect(await page.locator(".gallery-card").count()).toBeGreaterThan(10);
  await expect(page.locator("fluent-tree-item").first()).toBeVisible();
  const rendered = await renderedComponentTags(page, "fluent-", [
    "fluent-dialog",
    "fluent-dialog-body",
    "fluent-drawer",
    "fluent-drawer-body",
    "fluent-listbox",
    "fluent-menu",
    "fluent-menu-item",
    "fluent-menu-list",
    "fluent-option",
    "fluent-tooltip",
  ]);
  expect(rendered.count).toBe(42);
  expect(rendered.unrendered).toEqual([]);
  await page.locator("fluent-button", { hasText: "Open dialog" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page
    .locator("#gallery-dialog fluent-button", { hasText: "Close" })
    .click();
  await page.locator("fluent-button", { hasText: "Open drawer" }).click();
  await expect(
    page.getByText("Recent activity appears here", { exact: true }),
  ).toBeVisible();
  await page
    .locator("#gallery-drawer fluent-button", { hasText: "Close" })
    .click();
  await expect(page.locator(".token-keyword").first()).toHaveText("from");
});

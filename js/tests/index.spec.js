import { expect, test } from "@playwright/test";

test("registers and renders the Fluent catalog", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/dist/index.html");
  await page.evaluate(() => {
    const button = document.createElement("fluent-button");
    button.textContent = "Run";
    document.body.appendChild(button);
  });
  await expect
    .poll(() =>
      page.locator("fluent-button").evaluate((button) => !!button.shadowRoot),
    )
    .toBe(true);
  expect(
    await page.evaluate(() => ({
      // the two the published manifest lists under stale names
      option: !!customElements.get("fluent-option"),
      textarea: !!customElements.get("fluent-textarea"),
    })),
  ).toEqual({ option: true, textarea: true });
  expect(errors).toEqual([]);
});

test("survives an application that already registered a Fluent element", async ({
  page,
}) => {
  // an app shipping its own copy of Fluent registers `fluent-button` first; without the define-guard
  // this bundle throws from `customElements.define` and the page renders no Fluent at all
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    customElements.define("fluent-button", class extends HTMLElement {});
  });
  await page.goto("/dist/index.html");
  await page.waitForFunction(() => !!customElements.get("fluent-divider"));
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(() => ({
      theirs: !document.createElement("fluent-button").shadowRoot,
      restored: String(customElements.define).includes("native code"),
    })),
  ).toEqual({ theirs: true, restored: true });
});

test("publishes the Fluent version it serves", async ({ page }) => {
  await page.goto("/dist/index.html");
  await page.waitForFunction(() => !!globalThis.__spadayFluent);
  expect(await page.evaluate(() => globalThis.__spadayFluent.version)).toMatch(
    /^\d+\.\d+\.\d+/,
  );
});

test("follows spaday's page mode, islands included", async ({ page }) => {
  await page.goto("/dist/index.html");
  const r = await page.evaluate(() => {
    const token = (el, name) => getComputedStyle(el).getPropertyValue(name);
    const root = document.documentElement;
    const light = {
      fluent: token(root, "--colorNeutralBackground1"),
      spa: token(root, "--spa-surface"),
    };
    root.classList.add("wa-dark");
    const dark = {
      fluent: token(root, "--colorNeutralBackground1"),
      spa: token(root, "--spa-surface"),
    };
    // a light island inside the dark page flips back
    const island = document.createElement("div");
    island.className = "wa-light";
    document.body.appendChild(island);
    return { light, dark, island: token(island, "--spa-surface") };
  });
  expect(r.dark.fluent).not.toBe(r.light.fluent);
  expect(r.dark.spa).not.toBe(r.light.spa); // the shell palette follows Fluent's theme
  expect(r.island).toBe(r.light.spa);
});

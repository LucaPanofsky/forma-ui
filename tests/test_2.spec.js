import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/test_2/index.html");
});

test("hyperscript auto-clicks and fixi swaps in foo.html", async ({ page }) => {
  await expect(page.locator("[data-hyperscript-powered]")).toBeVisible();
});

test("hyperscript processes swapped content and appends YES", async ({ page }) => {
  await expect(page.locator("[data-hyperscript-powered]")).toHaveText("Am I done? YES");
});

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/test_1/index.html");
});

test("script1 adds #i-must-exist to the page", async ({ page }) => {
  await expect(page.locator("#i-must-exist")).toHaveText("I exist!");
});

test(".must-be-class has styles applied", async ({ page }) => {
  const borderStyle = await page.locator(".must-be-class").evaluate(
    el => getComputedStyle(el).borderTopStyle
  );
  expect(borderStyle).toBe("dashed");
});

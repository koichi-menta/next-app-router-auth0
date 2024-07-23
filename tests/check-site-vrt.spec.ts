import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/#/posts");

  await page.waitForURL("http://localhost:3000/#/posts");

  await page.screenshot({ path: "test.png" });

  // idをクリックする
  await page.getByLabel("Id").click();

  await page.waitForLoadState("domcontentloaded");

  expect(await page.screenshot()).toMatchSnapshot({
    name: "test.png",
  });
});

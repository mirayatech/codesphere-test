import { test, expect } from "@playwright/test";

test.describe("Manage Workspaces Lifecycle", () => {
  test("create and delete a workspace", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await page.getByRole("button", { name: "Add new workspace" }).click();

    await page.getByLabel("Workspace name").fill("New workspace name");
    await page.getByRole("button", { name: "Create" }).click();

    const workspaceName = page.locator("text=New workspace name");
    await expect(workspaceName).toBeVisible();

    await workspaceName
      .locator("xpath=ancestor::tr")
      .getByRole("button", { name: "Options" })
      .click();

    await page.getByRole("menuitem", { name: "Delete" }).click();
  });
});

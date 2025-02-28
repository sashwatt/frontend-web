import { expect, test } from '@playwright/test';

test(' All Gadgets page should display the main title', async ({ page }) => {
  await page.goto('http://localhost:5173/all-gadgets');
  await expect(page.locator('text=Discover & Rent the Best Gadgets')).toBeVisible();
});

test(' All Gadgets page should display the category section', async ({ page }) => {
  await page.goto('http://localhost:5173/all-gadgets');
  await expect(page.locator('text=Choose a Gadget Category')).toBeVisible();
});

test(' All Gadgets page should display the "Featured Gadgets" section', async ({ page }) => {
  await page.goto('http://localhost:5173/all-gadgets');
  await expect(page.locator('text=🔥 Featured Gadgets')).toBeVisible();
});


test(' All Gadgets page should have a footer with platform information', async ({ page }) => {
  await page.goto('http://localhost:5173/all-gadgets');
  await expect(page.locator('text=Your Trusted Gadget Rental Platform')).toBeVisible();
});

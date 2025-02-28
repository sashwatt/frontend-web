import { test } from '@playwright/test';

test('User should be able to filter gadgets and add one to the cart', async ({ page }) => {
  await page.goto('http://localhost:5173/all-gadgets');

  await page.click('button:has-text("Cameras")'); // Change category
  await page.click('button:has-text("Add to Cart")'); // Add a product
});

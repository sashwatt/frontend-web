import { test, expect } from '@playwright/test';

test('User can navigate to gadgets page from dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');

  await page.click('button:has-text("Explore Gadgets")');

  await expect(page).toHaveURL(/all-gadgets/);
});

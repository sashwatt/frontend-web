import { expect, test } from '@playwright/test';

test('About page should display correct information', async ({ page }) => {
  await page.goto('http://localhost:5173/about');

  await expect(page.locator('h2')).toHaveText('About BorrowBox');
});

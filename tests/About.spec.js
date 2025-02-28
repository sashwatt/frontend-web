import { expect, test } from '@playwright/test';

test('About page should display title', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await expect(page.locator('text=About BorrowBox')).toBeVisible();
});

test(' About page should display mission statement', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await expect(page.locator('text=Our mission')).toBeVisible();
});

test('About page should display "Why Choose Us?" section', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await expect(page.locator('text=Why Choose Us?')).toBeVisible();
});

test(' About page should list core features', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await expect(page.locator('text=Community Driven')).toBeVisible();
  await expect(page.locator('text=Fast & Secure')).toBeVisible();
  await expect(page.locator('text=Premium Quality')).toBeVisible();
});

test(' About page should have CTA "Join BorrowBox Today!"', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await expect(page.locator('text=Join BorrowBox Today!')).toBeVisible();
});

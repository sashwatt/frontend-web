import { expect, test } from '@playwright/test';

test(' Contact page should display title', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await expect(page.locator('text=Contact BorrowBox')).toBeVisible();
});

test(' Contact page should show email contact option', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await expect(page.locator('text=Email Us')).toBeVisible();
  await expect(page.locator('text=support@borrowbox.com')).toBeVisible();
});

test(' Contact page should show phone contact option', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await expect(page.locator('text=Call Us')).toBeVisible();
  await expect(page.locator('text=+123 456 7890')).toBeVisible();
});

test(' Contact page should show address', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await expect(page.locator('text=Visit Us')).toBeVisible();
  await expect(page.locator('text=123 BorrowBox Street, TechCity')).toBeVisible();
});

test(' Contact page should have a message form', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await expect(page.locator('text=Send Us a Message')).toBeVisible();
});

import { expect, test } from '@playwright/test';

test('Register page should display title', async ({ page }) => {
  await page.goto('http://localhost:5173/register');
  await expect(page.locator('text=Join BorrowBox')).toBeVisible();
});

test(' Register page should have a full name input', async ({ page }) => {
  await page.goto('http://localhost:5173/register');
  await expect(page.locator('input[placeholder="Full Name"]')).toBeVisible();
});

test(' Register page should have an email input', async ({ page }) => {
  await page.goto('http://localhost:5173/register');
  await expect(page.locator('input[placeholder="Email Address"]')).toBeVisible();
});

test(' Register page should have a password input', async ({ page }) => {
  await page.goto('http://localhost:5173/register');
  await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
});

test(' Register page should have Terms and Conditions checkbox', async ({ page }) => {
  await page.goto('http://localhost:5173/register');
  await expect(page.locator('text=Terms and Conditions')).toBeVisible();
});

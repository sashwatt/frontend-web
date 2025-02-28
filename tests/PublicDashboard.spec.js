import { expect, test } from '@playwright/test';

test(' Public Dashboard should display title', async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  await expect(page.locator('text=Premium Gadget Rentals')).toBeVisible();
});

test(' Public Dashboard should have a "Hot Deals" section', async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  await expect(page.locator('text=🔥 Hot Deals from BorrowBox')).toBeVisible();
});

test(' Public Dashboard should list featured gadgets', async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  await expect(page.locator('text=PS5 Pro')).toBeVisible();
  await expect(page.locator('text=Sony Camera Pro')).toBeVisible();
});

test(' Public Dashboard should display benefits section', async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  await expect(page.locator('text=100% Secure')).toBeVisible();
  await expect(page.locator('text=Affordable Pricing')).toBeVisible();
});

test(' Public Dashboard should have "Explore Gadgets" button', async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  await expect(page.locator('button:has-text("Explore Gadgets")')).toBeVisible();
});

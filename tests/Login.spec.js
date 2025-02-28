import { expect, test } from '@playwright/test';

// ✅ 1️⃣ Valid Login Test
test('Valid user should login and navigate to dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'password123');

  await page.click('button:has-text("Login")');

  await expect(page).toHaveURL(/dashboard/);
});

// ❌ 2️⃣ Invalid Login Test
test('Invalid credentials should show an error', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[type="email"]', 'wrong@example.com');
  await page.fill('input[type="password"]', 'wrongpassword');

  await page.click('button:has-text("Login")');

  await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

// 🔎 3️⃣ Check "Email Address" Label
test(' "Email Address" label should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('text=Email Address')).toBeVisible();
});

// 🔎 4️⃣ Check "Password" Label
test(' "Password" label should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('text=Password')).toBeVisible();
});

// 🔎 5️⃣ Check "Login" Button Label
test('🔎 "Login" button should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('button:has-text("Login")')).toBeVisible();
});

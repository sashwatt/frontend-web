import { expect, test } from '@playwright/test';

// ✅ 1️⃣ Valid Login Test (Remains the same)
test('Valid user should login and navigate to dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'password123');

  await page.click('button:has-text("Login")');

  await expect(page).toHaveURL(/dashboard/);
});

// 🔎 2️⃣ Search for "Welcome Back!" Heading
test('"Welcome Back!" heading should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('text=Welcome Back!')).toBeVisible();
});

// 🔎 3️⃣ Search for "Email Address" Input Label
test('"Email Address" input should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('input[placeholder="Email Address"]')).toBeVisible();
});

// 🔎 4️⃣ Search for "Password" Input Label
test(' "Password" input should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
});

// 🔎 5️⃣ Search for "Remember Me" and "Forgot Password?" Labels
test(' "Remember me" and "Forgot Password?" should be visible', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(page.locator('text=Remember me')).toBeVisible();
  await expect(page.locator('text=Forgot Password?')).toBeVisible();
});

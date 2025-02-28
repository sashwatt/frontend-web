import { test } from '@playwright/test';

test('User should be able to register successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/register');

  await page.fill('input[name="fName"]', 'John Doe');
  await page.fill('input[name="email"]', 'johndoe@example.com');
  await page.fill('input[name="password"]', 'StrongPass123');

  await page.check('input[name="termsAccepted"]');

  await page.click('button:has-text("Sign Up")');

  
});

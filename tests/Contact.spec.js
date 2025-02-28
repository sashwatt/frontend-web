import { expect, test } from '@playwright/test';

test('Contact page should display expected words', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');

  // Check if page title is visible
  await expect(page.locator('text=Contact BorrowBox')).toBeVisible();

  
  // Check for contact details
  await expect(page.locator('text=Email Us')).toBeVisible();
  await expect(page.locator('text=support@borrowbox.com')).toBeVisible();
  await expect(page.locator('text=Call Us')).toBeVisible();
  await expect(page.locator('text=+123 456 7890')).toBeVisible();
  await expect(page.locator('text=Visit Us')).toBeVisible();
  await expect(page.locator('text=123 BorrowBox Street, TechCity')).toBeVisible();

  // Check for button text
  await expect(page.locator('text=Send Message')).toBeVisible();
  await expect(page.locator('text=Get in Touch')).toBeVisible();
});

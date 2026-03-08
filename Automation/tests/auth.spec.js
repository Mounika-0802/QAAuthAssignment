import { test, expect } from '@playwright/test';

test('Successful registration', async ({ page }) => {
  await page.goto('http://localhost:3000/register');

  await page.fill('#name', 'TestUser123');
  await page.fill('#email', 'testuser123@gmail.com');
  await page.fill('#password', 'Password123456');
  await page.fill('#confirmPassword', 'Password123456');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=success')).toBeVisible();
});

test('Registration with duplicate email', async ({ page }) => {
  await page.goto('http://localhost:3000/register');

  await page.fill('#name', 'DuplicateUser');
  await page.fill('#email', 'mounika@gmail.com');
  await page.fill('#password', 'Password123456');
  await page.fill('#confirmPassword', 'Password123456');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Email already exists')).toBeVisible();
});

test('Successful login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('#email', 'mounika@gmail.com');
  await page.fill('#password', 'Pass12345678');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});

test('Login with invalid password', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('#email', 'mounika@gmail.com');
  await page.fill('#password', 'wrongpassword');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Unauthorized')).toBeVisible();
});

test('Access dashboard without login', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');

  await expect(page).toHaveURL(/login/);
});

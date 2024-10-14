import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// import { test, expect } from '@playwright/test';

test('fabindia', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.fabindia.com/');
  await page.getByRole('link', { name: 'Furniture', exact: true }).click();
  await page.getByRole('link', { name: 'Personal Care', exact: true }).click();
  await page.getByRole('link', { name: 'Food', exact: true }).click();
  await page.getByRole('link', { name: 'Fabfamily' }).click();
  await page.getByRole('link', { name: 'REWARDS', exact: true }).click();
  await page.getByRole('button', { name: 'Experiences' }).click();
  await page.goto('https://fabfamily.fabindia.com/rewards?type=experiences&page=0');
  await page.locator('svg').first().click();
  await page.getByLabel('Beleza').check();
  await page.getByRole('link', { name: 'reward image 1 Fabcoin Beleza' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('hello', async ()=>{

})
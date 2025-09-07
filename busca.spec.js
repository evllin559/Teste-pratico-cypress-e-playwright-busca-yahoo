import { test, expect } from '@playwright/test';

test('Deve buscar Pacto Soluções no Yahoo', async ({ page }) => {
  // Acessa o Yahoo
  await page.goto('https://br.search.yahoo.com/');

 
  await page.fill('input[name="p"]', 'Pacto Soluções');
  await page.press('input[name="p"]', 'Enter');


  await expect(page).toHaveURL(/search/);

  await page.waitForSelector('#web');

  const primeiroResultado = page.locator('#web li').first();

  await expect(primeiroResultado).toContainText(/Pacto/i);
});
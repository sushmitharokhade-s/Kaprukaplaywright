import { test, expect } from '@playwright/test';

test('handle alert popup', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // listen for alert
  page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button',{name:'Click for JS Alert'}).click();
  //await page.click('button:has-text("Click for JS Alert")');
});
import {test} from '@playwright/test';

test('aria labels', async ({page, browser})=>{
    
    await browser.startTracing(page, {path: 'trace.json',screenshots: true, categories: ['devtools.timeline ']} );

    await page.goto('https://www.amazon.com');
    await page.getByRole('textbox', {name: 'Search Amazon'}).click()
    await page.getByRole('textbox', {name: 'Search Amazon'}).fill("shoes");
    await page.keyboard.press('Enter');
    await browser.stopTracing();
    // await page.getByLabel('Sell Online').hover()
    
})

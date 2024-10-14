import  { test, chromium } from "@playwright/test";

test('hello ',(async ()=>{
    const browser = await chromium.launch({
        headless : false
    })
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.google.com");
}));

test('sample one', async ({ page })=>{
    await page.goto('https://www.fabindia.com');
    await page.locator("//a//p[text()='Fabfamily']" , {hasText : 'Fabfamilys'} ).click();

})
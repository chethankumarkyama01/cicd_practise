import test from "playwright/test";

test('radio buttons', async({page})=>{
    await page.goto("https://practice.expandtesting.com/radio-buttons", {waitUntil:'load'});
    await page.locator("[id='blue']").check();
    await page.locator("[id='red']").check();
    await page.locator("[id='black']").check();
    await page.locator("[id='black']").check();
})

test('checkboxes', async({page})=>{})
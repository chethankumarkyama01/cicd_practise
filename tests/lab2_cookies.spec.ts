import { test } from "@playwright/test";
const fs = require('fs');

test('cookies', async({page, context})=>{
    await page.goto("http://eaapp.somee.com/", {waitUntil: 'load'});
    await page.locator('#loginLink').click();
    await page.locator('#UserName').click();
    await page.keyboard.type("admin");
    await page.keyboard.press("Enter");
    await page.keyboard.type("password");
    await page.keyboard.press("Enter");
    
    
    
    const cookies = await context.cookies();
    const cookiesJSON = await JSON.stringify(cookies);
    
    await fs.writeFileSync('./tests/lab2_cookies1.json', cookiesJSON);
})

test('getting cookies', async({page, context})=>{
    await page.goto("https://demo.automationtesting.in/Datepicker.html", {waitUntil: 'load'});
    const cookies = await context.cookies();
    const cookiesJSON = await JSON.stringify(cookies);
    
    await fs.writeFileSync('./tests/lab2_cookies2.json', cookiesJSON);
})
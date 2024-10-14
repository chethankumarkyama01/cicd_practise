import { test } from '@playwright/test';




// test('excel file', async({page, context})=>{
//     await page.goto("https://www.amazon.com/", {waitUntil: 'load'});
//     await page.locator("#twotabsearchtextbox").click();
//     // await page.locator("input#nav-bb-search").fill("shoes");
//     await page.keyboard.type('shoes');
//     await page.keyboard.press('Enter');

//     // const page2 = context.waitForEvent('page');
//     // page2.

// });

test('new window', async ({ page, context }) => {
    await page.goto("https://www.overstock.com/");
    await page.locator("//a[text()='About Us']").scrollIntoViewIfNeeded();
    await page.locator("//a[text()='About Us']").click();
    page = await context.waitForEvent('page');
    await page.locator("//p[text()='Careers']").click();
    // await page.waitForTimeout(3000);
    // const options = await page.$$("#Contact_CountryCode>option")
    // console.log(options.length);
    
    // for(let option of options){
    //     console.log(option.innerText());
    // }
    // await page.waitForTimeout(3000);
    
    
});

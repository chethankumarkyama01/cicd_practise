import test from "playwright/test";

test('dropdown select',{tag: '@dropdowns'}, async({page})=>{
    await page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/213");
    await page.waitForTimeout(3000);
    await page.locator("#Contact_CountryCode").scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.selectOption("#Contact_CountryCode", {value: 'AF'});
    await page.waitForTimeout(3000);
    await page.selectOption("#Contact_CountryCode", {label: 'Angola'});
    await page.waitForTimeout(3000);
    await page.selectOption("#Contact_CountryCode", {index: 9});
    await page.waitForTimeout(3000);

    // direct click
    // await page.locator("#Contact_CountryCode").click();
    // await page.locator("//option[text()='Albania']").click();
    // await page.pause();
});
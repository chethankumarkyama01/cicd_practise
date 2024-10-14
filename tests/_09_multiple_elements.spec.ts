import test from "@playwright/test";

test('select option data retrive', async ({page})=>{
    await page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/213");
    const options = await page.locator("#Contact_CountryCode>option").all();
    // const options = await page.$$("#Contact_CountryCode>option");
    console.log(options.length);

    for(let option of options){
        console.log(await option.textContent());
    }
    // await page.waitForTimeout(3000);
})


test('multiple prices', async({page})=>{
    await page.goto("https://www.fabindia.com/");
    await page.locator("[href='/women']").hover();
    await page.locator("[href='/clothing/women-kurtas']").click();

    await page.waitForTimeout(3000);
    var prices = await page.locator('span[class="offer-amount"]').all();
    console.log(prices.length);
    
    
    for(const price of prices){
        console.log(await price.textContent());
    }
    
    console.log(await "================");
    // sorting the values
    await page.selectOption('[id="select-filter"]', {value: 'price-asc'});
    await page.waitForTimeout(5000);
    prices = await page.locator('span[class="offer-amount"]').all();
    await page.waitForTimeout(3000);

    console.log(prices.length);
    
    
    for(const price of prices){
        console.log(await price.textContent());
    }
})
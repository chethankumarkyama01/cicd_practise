import {test, expect} from '@playwright/test'
import exp from 'constants';

// SIMPLE ASSERTION
test('assertions', async ({page})=>{
    // await page.goto('https://www.amazon.com');
    // await expect(page).toHaveURL('https://www.amazon.com');

    await page.goto('https://www.thewarehouse.co.nz/');
    await page.locator("//button[contains(text(),'Categories')]", {hasText: 'Categories'}).hover()

    // hovering on new and trending
    // using nth property
    await page.locator("//li[@role='presentation']//child::a").nth(1).hover();
    await page.locator("//a[@id='category-newarrivals']").nth(0).hover()

    // clicking on new arraivals
    await page.locator("//a[text()='New Arrivals']").nth(0).click()

    const title = await page.locator('.title').textContent();
    await expect(title).toEqual('New Arrivals');


})

// toEqual, toContain, toBe
test('assertion two', async ({page })=>{
    await page.goto('https://www.thewarehouse.co.nz/');

    const title = "hello";
    // >> toContain
    // assertion passes
    expect(title).toContain("hell");
    // assertion fails 
    // expect(title).toContain("ball");
    
    // toBe
    // expect(title).toBe("hello");
})

// page inbuilt title and url
test('inbuilt title', async ({page})=>{
    await page.goto('c');

    await expect(page).toHaveTitle("The Warehouse NZ | Everyday Low Prices - Kiwi Owned");

    await expect(page).toHaveURL("https://www.thewarehouse.co.nz/")
    
})


// toBeVisible, not.toBeVisible, toBeHidden for pages

test('locator assertions', async ({page})=>{
    // going to page
    await page.goto("https://www.thewarehouse.co.nz/");

    // hovering the categories
    const categories = await page.locator("//button[@data-test-id='category-root']");
    await categories.hover();
    await expect(categories).toBeVisible()

    // clicking on new and trending
    const newArrivals = await page.locator("//a[@id='category-newarrivals']").nth(0);
    // await newArrivals.hover();
    // ==>
    await newArrivals.click();

    // // new arrivals
    // // const newArr = await page.locator("//a[text()='New Arrivals']").nth(0);
    // const newArr = await page.locator("//a[@href='/c/new-trending/new-arrivals']").nth(0);
    // await expect(newArr).toBeVisible();
    // await newArr.click();
    
    // // checking the page hass the following title
    // const title = "Shop New Arrivals at The Warehouse | The Warehouse NZ";
    // await expect(page).toHaveTitle(title);

    // ==>checking the page hass the following title
    // const title = "Shop New Arrivals at The Warehouse | The Warehouse NZ";
    // ==>
    const title = "New Arrivals at The Warehouse | The Warehouse";
    await expect(page).toHaveTitle(title);

    // checking "new arrivals" is not visible
    await expect(newArrivals).not.toBeVisible()
    await expect(newArrivals).toBeHidden()

})

// locator with haveAttribute, haveId etc..
// test('locator more examples',  async ({page})=>{
    
//     // going to page
//     await page.goto("https://www.thewarehouse.co.nz/");

//     // hovering the categories
//     const categories = await page.locator("//button[@data-test-id='category-root']");
//     await categories.hover();
//     await expect(categories).toHaveAttribute("attribute","attribute-value")
//     await expect(categories).toHaveId("id-value")
//     await expect(categories).toHaveClass("class-value")
// })

// expect with soft
test('locator more examples',  async ({page})=>{
    
    // going to page
    await page.goto("https://www.thewarehouse.co.nz/");
    // await page.screenshot({fullPage: true});

    // hovering the categories
    const categories = await page.locator("//button[@data-test-id='category-root']");
    await categories.hover();

    // // run the remaining test without stoppig at the assertion
    // await expect.soft(categories).toHaveAttribute("attribute","attribute-value")

    // await expect(categories).toHaveId("id-value")
    // await expect(categories).toHaveClass("class-value")
})
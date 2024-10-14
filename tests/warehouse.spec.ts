import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
  

  await page.goto('https://www.thewarehouse.co.nz/', {waitUntil : 'domcontentloaded'});
  await page.locator("data-test-id=category-root").hover();
  await page.locator("//li[@role='presentation']").nth(1).hover();
  // await setTimeout(()=>{page.locator("//a[@id='category-newarrivals']").hover();},3000);
  await page.locator("//a[@data-target='#mega-menu-category-homegarden']").hover();
  
  // properties
  // await page.locator("data-test-id=category-root", {
  //   hasText : 'Categeries'
  // }).hover(

  // );

});

/* 
doubts : 

locators
implementation and how to verify the following are selected 
1) chaining locators
2) css selectors

*/
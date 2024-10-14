import {test} from '@playwright/test';
import { time } from 'console';

var d;
test.beforeAll(async ()=>{
    d = await new Date();
})

test.beforeEach( async ({page})=>{
    await page.goto("https://www.amazon.com");
})


// // test.describe('description,  function)
// test.describe('going to shoes section', async ()=> {
//     test('amazon first product', async({page})=>{
//         await page.locator("[id='twotabsearchtextbox']").click();
//         await page.locator("[id='twotabsearchtextbox']").fill("shoes");
//         await page.keyboard.press('Enter');
//         await page.waitForSelector("[data-cel-widget='search_result_1']");
//     })
// })


// // test.step('description,  function) inside the test()
// test.describe('going to shoes section', async ()=> {
//     test('shoes on amazon', async ({page})=> {
//         await test.step('clicking on search and searching the shoes', async ()=>{
//             await page.locator("[id='twotabsearchtextbox']").click();
//             await page.locator("[id='twotabsearchtextbox']").fill("shoes");
//             await page.keyboard.press('Enter');
//         })
//         await test.step('checking weather page has shoes', async ()=>{
//             await page.waitForSelector("[data-cel-widget='search_result_1']");
//         })
//     })
// })

// // TEST ONLY , TEST SKIP
// test.describe('going to shoes section', async ()=> {

    

//     // ========> only
//     test.only('shoes', async ({page, browserName})=> {
        
//         // skip for browser
//         test.skip(browserName==='firefox', "still not working on it")

//         await test.step('clicking on search and searching the shoes', async ()=>{
//             await page.locator("[id='twotabsearchtextbox']").click();
//             await page.locator("[id='twotabsearchtextbox']").fill("shoes");
//             await page.keyboard.press('Enter');
//         })
//         await test.step('checking weather page has shoes', async ()=>{
//             await page.waitForSelector("[data-cel-widget='search_result_1']");
//         })
//     })

//     // skip the entire test =======>
//     test.skip('shoe', async ({page})=> {
//         await test.step('clicking on search and searching the shoes', async ()=>{
//             await page.locator("[id='twotabsearchtextbox']").click();
//             await page.locator("[id='twotabsearchtextbox']").fill("shoes");
//             await page.keyboard.press('Enter');
//         })
//         await test.step('checking weather page has shoes', async ()=>{
//             await page.waitForSelector("[data-cel-widget='search_result_1']");
//         })
//     })  
// })


// // testInfo 
// test.describe('going to shoes section', async ()=> {
//     test('shoes amazon', async ({page}, testInfo)=> {

//         // testInfo.skip(browsername, description)

//         // we can override the config file from here using testInfo================>>>>
//         // testInfo.config.fullyParallel
//         // testInfo.config.quiet
//         // testInfo.title
//         // testInfo.duration

//         await test.step('clicking on search and searching the shoes', async ()=>{
//             await page.locator("[id='twotabsearchtextbox']").click();
//             await page.locator("[id='twotabsearchtextbox']").fill("shoes");
//             await page.keyboard.press('Enter');
//         })
//         await test.step('checking weather page has shoes', async ()=>{
//             await page.waitForSelector("[data-cel-widget='search_result_1']");
//         })
//     })
// })

// // testInfo in afterEach

test.describe('going to shoes section', async ()=> {
    test('shoes on amazon', async ({page})=> {
        await test.step('clicking on search and searching the shoes', async ()=>{
            await page.locator("[id='twotabsearchtextbox']").click();
            await page.locator("[id='twotabsearchtextbox']").fill("shoes");
            await page.keyboard.press('Enter');
        })
        await test.step('checking weather page has shoes', async ()=>{
            await page.waitForSelector("[data-cel-widget='search_result_1']");
        })
    })
})

// afterEach hook
test.afterEach(async ({page}, testInfo)=>{
    // testInfo properties ============>>>>>>
    // testInfo.title
    // testInfo.testId etc....
    var time = await `screenshot_${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}.png`;
    // await page.screenshot({path : `screenshot/${time}`})
})


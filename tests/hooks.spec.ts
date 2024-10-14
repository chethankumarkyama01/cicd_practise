import {test} from '@playwright/test';
import { time } from 'console';

var d;
test.beforeAll(async ()=>{
    d = await new Date();
})

test.beforeEach( async ({page})=>{
    await page.goto("https://www.amazon.com");
})

test('amazon first product', async({page})=>{
    await page.locator("[id='twotabsearchtextbox']").click();
    await page.locator("[id='twotabsearchtextbox']").fill("shoes");
    await page.keyboard.press('Enter');
    await page.waitForSelector("[data-cel-widget='search_result_1']");
})

test('amazon first', async({page})=>{
    await page.locator("[id='twotabsearchtextbox']").click();
    await page.locator("[id='twotabsearchtextbox']").fill("shoes");
    await page.keyboard.press('Enter');
    await page.waitForSelector("[data-cel-widget='search_result_1']");
})

test.afterEach(async ({page})=>{
    var time = await `screenshot_${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}.png`;
    await page.screenshot({path : `screenshot/${time}`})
})
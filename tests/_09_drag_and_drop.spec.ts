import { test } from "@playwright/test";

test('drag and drop', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Static.html", {waitUntil: 'load'});
    await page.locator("#angular").dragTo(page.locator("#droparea.dragged"));
    await page.locator("#mongo").dragTo(page.locator("#droparea.dragged"));
    await page.locator("#node").dragTo(page.locator("#droparea.dragged"));
    await page.locator("#angular").nth(0).dragTo(page.locator("#droparea.dragged"));
    await page.locator("#mongo").nth(1).dragTo(page.locator("#droparea.dragged"));
    await page.locator("#node").nth(0).dragTo(page.locator("#droparea.dragged"));
})
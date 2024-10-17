import path from "path";
import { test } from "playwright/test";

test.beforeEach(async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html", {waitUntil:'load'});
});

test('alerts', async({page})=>{
    await page.locator("#OKTab>button").click();
    await page.on('dialog', (dialog)=> dialog.accept());
    await page.screenshot({path: 'homework/s1.png'});
});

test('file upload', async({page})=>{
    await page.locator("//a[text()='More']").hover();
    await page.locator("[href='FileUpload.html']").click();
    await page.setInputFiles("[id='input-4']", "c:/Users/10742817/OneDrive - LTIMindtree/Desktop/chethan/prasctise/github/cicd_practise/pdf/pdf1.pdf'");
    await page.screenshot({path: 'homework/s2.png'});
})

test("//a[text()='Home']", async({page})=>{
    await page.locator("//a[text()='Home']").click();
    await page.pdf({path: 'homework/s3.pdf'});
});


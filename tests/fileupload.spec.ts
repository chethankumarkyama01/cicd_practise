import {test} from '@playwright/test';
const fs = require('fs');

test('file upload', async ({page})=> {
    await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html", {waitUntil: 'networkidle'});
    // clickng on choose files
    // const file_upload = await page.locator("[name='userfile']");
    const file_upload = await page.locator("input[name='userfile']");
    await file_upload.setInputFiles("C:/Users/10742817/OneDrive - LTIMindtree/Pictures/Screenshots/attendace.png");
    await page.screenshot({path:'screenshot/s1.png'});
    await page.locator("[type='submit']").click();
    await page.screenshot({path:'screenshot/s2.png'});
    
    const traceInfo = JSON.parse(fs.readFileSync('./trace.json', 'utf-8'))
});
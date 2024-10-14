import {test} from '@playwright/test';

test('generating pdf', async({page })=>{
    
    await page.goto("https://www.amazon.com");
    // await page.pdf({path: 'pdf/pdf3.pdf'})
});
import { test } from "@playwright/test";


// run in firefox
test('ad blocker', async ({page})=>{

    const miniDB = [
        "https://pagead2.googlesyndication.com",
        "https://fundingchoicesmessages.google.com",
        "https://tpc.googlesyndication.com",
        "https://maxcdn.bootstrapcdn.com",
        "https://ajax.googleapis.com",
        "https://jqueryui.com"
    ];

    await page.route('**/*', (route)=>{
        const url = route.request().url();

        if(miniDB.some(d => url.startsWith(d)))
            route.abort();
        else
            route.continue();
    })

    // await page.route('**/*', (route)=>{
    //     const url = route.request().url();

    //     for(let d of miniDB){
    //         if([true, true, true, true])
    //             route.abort();
    //         else
    //             route.continue();
    //     }

    // })

    await page.goto("https://demo.automationtesting.in/Datepicker.html", {waitUntil: 'load'});
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
})
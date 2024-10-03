import { expect, test } from '@playwright/test';
import { Navigation, ContactForm, contactDetails } from '../locators/locators';
import { Login, LoginDetails } from '../locators/login';


test('contact form', async ({ page }) => {

    // going to contact form
    await page.goto('/');
    await page.screenshot({ path: 'screenshot/contact.png' });
    await page.locator(Navigation.contactUs).click()

    // entering the contact details
    await page.locator(ContactForm.username).click();
    await page.locator(ContactForm.username).fill(contactDetails.username);
    await page.locator(ContactForm.email).click();
    await page.locator(ContactForm.email).fill(contactDetails.email);
    await page.locator(ContactForm.subject).click();
    await page.locator(ContactForm.subject).fill(contactDetails.subject);
    await page.locator(ContactForm.message).click();
    await page.locator(ContactForm.message).fill(contactDetails.message);
    // try{
    //     await page.locator(ContactForm.captcha).click();
    // }catch{

    // }
    // sending the message
    await page.locator(ContactForm.send).click();

    // confirmation of details sent
    // await expect(page.locator(ContactForm.confirmation)).toHaveText(contactDetails.confirmation);
    const expected_string = await page.locator(ContactForm.confirmation).innerText();
    console.log(expected_string);
    await expect(expected_string).toContain(contactDetails.confirmation);
    await page.screenshot({ path: 'screenshot/contact_unsuccess.png' });

})

test('login to demo site', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.screenshot({ path: 'screenshot/login.png' });
    // login
    await page.locator(Login.username).click();
    await page.locator(Login.username).fill(LoginDetails.username);
    await page.locator(Login.password).click();
    await page.locator(Login.password).fill(LoginDetails.password);
    await page.locator(Login.submit).click();

    // verifying the login
    await page.locator(Login.login_success).isVisible();
    const success_ = await page.locator(Login.login_success).textContent({ timeout: 3000 });
    // console.log(success_);
    await expect.soft(success_).toEqual(LoginDetails.login_success);
    await page.screenshot({ path: 'screenshot/login_success.png' });

})

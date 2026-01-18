import {test,expect, type Locator} from "@playwright/test";


test('verify title', async({page})=>{
    test.slow();
    await page.goto("https://demo.nopcommerce.com/") ;
   await page.getByRole('link',{name :"Register"}).click({force : true});
   await page.waitForTimeout(20000)
    await page.getByLabel('First name').fill("vamsi");
   await page.getByLabel('Last name').fill("mohan");
    await page.getByLabel('Email').fill("vamsi@gmail.com");
    await page.getByLabel("Company name").fill("left brian path");
    await page.getByRole('button',{ name: 'Register'}).click();
    await expect(page).toHaveTitle("nopCommerce demo")

})
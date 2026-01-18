import {test,expect, type Locator} from '@playwright/test'



test("verify tiitle",async({page})=>{
    await page.goto("https://leftbrainpath.com/")
   const title :Locator =await page.locator("//h2[contains(text()='Welcome to LeftBrain Path LLP')]")
   console.log(title)
   await expect(page.locator("//h2[text()='Welcome to LeftBrain Path LLP']")).toBeVisible({timeout:6000});
   
   

})
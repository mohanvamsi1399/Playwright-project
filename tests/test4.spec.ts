import{test,expect, type Locator} from "@playwright/test"


test("verify title",async({page})=>{
    await page.goto("https://leftbrainpath.com/")
    const name :Locator =await page.locator("//h2[text()='Welcome to LeftBrain Path LLP']/preceding-sibling ::p");
    await expect (page.locator("//h2[text()='Welcome to LeftBrain Path LLP']/preceding-sibling ::p")).toHaveText("Innovating Insurance with Technology")

}

);
import{test,expect} from '@playwright/test'

test('fill and submit the form',async({page})=>{
    test.slow()
    await page.goto('https://leftbrainpath.com/')
    await page.locator('a[href="contact.html#form"]').click()
    await page.getByPlaceholder('Your Name').fill("vamsi")
    await page.getByPlaceholder('Your Email').fill("vamsi@gmail.com")
    await page.getByPlaceholder('your phone').fill("3456789123")
    await page.getByPlaceholder('your message').fill(" HEY I AM INTERSTED IN INSURANCE DOMAIN")
    await page.getByRole('button',{name : "Submit Now"}).click()
    await expect(page).toHaveTitle("leftbrainpath.com")
    await page.waitForTimeout(6000)
})
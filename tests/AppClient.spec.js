

const{test, expect}= require('@playwright/test');

test('Get first product', async ({browser})=>{
const context = await  browser.newContext();
const page= await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

const emailboxField= page.locator("#userEmail");
const passwordField= page.locator("#userPassword");
const loginButton= page.locator("#login");
const AddToCartButton= page.locator("//div[@class='card']//b[text()='ZARA COAT 3']/../following-sibling::button[last()]")
const productTitles= page.locator("//div[@class='card-body']//h5");

await emailboxField.fill("ajrawat24@gmail.com");
await passwordField.fill("test123");
await loginButton.click();

//await productTitles.first().textContent();
await page.waitForLoadState('networkidle');
console.log(await productTitles.allTextContents());
await AddToCartButton.click();





});
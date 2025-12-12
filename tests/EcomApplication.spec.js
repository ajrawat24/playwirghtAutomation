import { test, expect } from '@playwright/test';


test.only ('Chheckout Flow Test', async ({browser})=>
{
const context = await browser.newContext();
const page= await context.newPage();

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   const emailAddress= "ajrawat24@gmail.com";
const email= page.locator("//input[@id='userEmail']");
const password= page.locator("//input[@id='userPassword']");
const loginButton= page.locator("//input[@id='login']");
const firstProductTitle= page.locator("(//div[@class='card-body']//b)[1]");

const AddToCartButton= page.locator("(//div[@class='card-body']//button[contains(text(),' Add To Cart')])[1]");

const cartButton= page.locator("//button[@routerlink='/dashboard/cart']");

const myCart= page.locator("(//div[@class='cartSection']//h3)[1]");

const checkoutButton= page.locator("//button[contains(text(),'Checkout')]");

const Entercoupon= page.locator("//input[@name='coupon']");
const applyCouponButton= page.locator("//button[@type='submit']");
const prepopulatedEmail= page.locator("//div[@class='user__name mt-5']//label[@type='text']");
const cvv= page.locator("//div[@class='field small']//following-sibling::input[@class='input txt']");
const placeOrderButton= page.locator("//a[contains(text(),'Place Order ')]");

const selectCountry= page.locator("//input[@placeholder='Select Country']");

const selectIndia= page.locator("//span[normalize-space()='India']");

const orderIdLocator= page.locator("//tr[@class='ng-star-inserted']//td//label[@class='ng-star-inserted'][1]");

const orderHistoryPage= page.locator("//label[@routerlink='/dashboard/myorders']");

const orderIdOnHistoryPage= page.locator("//tbody//tr[1]/th");

const confirmationText= page.locator("//h1[contains(text(),' Thankyou for the order')]");

await email.fill("ajrawat24@gmail.com");
await password.fill("test123");
await loginButton.click();
const productTitle= await firstProductTitle.textContent();
console.log(productTitle);
await AddToCartButton.click();
await cartButton.click();
const cartAddedProduct= await myCart.textContent();
console.log(cartAddedProduct);
await expect(productTitle).toContain(cartAddedProduct);
await checkoutButton.click();
const checkoutPageEmail= await prepopulatedEmail.textContent();

await expect(checkoutPageEmail).toContain(emailAddress);
await Entercoupon.fill("rahulshettyacademy");
await applyCouponButton.click();

await cvv.fill("999");
await selectCountry.click(); 
await selectCountry.pressSequentially("ind");
await selectIndia.click();
await placeOrderButton.click();
const orderId=await orderIdLocator.textContent();
console.log(orderId);
const confirmText=await confirmationText.textContent();

await expect(confirmText).toContain("Thankyou for the");

await orderHistoryPage.click();
console.log(await orderIdOnHistoryPage.textContent());



});

    
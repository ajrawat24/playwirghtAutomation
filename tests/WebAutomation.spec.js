
const { test,expect } = require('@playwright/test');

  test.only('Verify sign in when invalid user name', async ({ browser }) => {
  const context = await browser.newContext();   // Incognito
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const  pageTitle="LoginPage Practise | Rahul Shetty Academy";
   console.log(pageTitle);
  await expect(page).toHaveTitle(pageTitle);
  const username=page.locator("//input[@id='username']");
  const password=page.locator("//input[@id='password']");
  const signButton= page.locator("//input[@id='signInBtn']");
  const errorOnInvalidUser="Incorrect username/password.";
  const cardTitle= page.locator(".card-body a");
  await username.fill("rahulshettyacadem");
  await password.fill("learning");
  await signButton.click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(errorOnInvalidUser).toContain("Incorrect");
  await username.fill("");
  await username.fill("rahulshettyacademy");
  await password.fill("learning");
  await signButton.click();
  const firstItem=await cardTitle.first().textContent();
  const allTitles= await cardTitle.allTextContents();
  console.log(firstItem);
  console.log(allTitles);

 

});






 //await page.locator("//span[@class='checkmark']").click();
  // await page.locator("//select[@class='form-control']");
  // await page.locator("//option[text()='Student']");
  // await page.locator("//input[@id='terms' and @type='checkbox']");


const { test,expect } = require('@playwright/test');
const { promises } = require('dns');

  test('Verify sign in when invalid user name', async ({ browser }) => {
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

test('UI control', async ({browser})=>
{
  const context = await  browser.newContext();
  const page= await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // const username=page.locator("//input[@id='username']");
  // const password=page.locator("//input[@id='password']");
  // const signButton= page.locator("//input[@id='signInBtn']");
  // await username.fill("rahulshettyacademy");
  // await password.fill("learning");
  const radioButton= page.locator("//input[@type='radio' and @value='user']")
   await radioButton.click();
  await expect(radioButton).toBeChecked();
   //(await expect(radioButton).isChecked()).toBe(true);
  const dropdown= page.locator("//select[@class='form-control']");
  await dropdown.selectOption("consult");
  await page.locator("//button[@id='okayBtn']").click();
  const checkBox= page.locator("//input[@id='terms' and @type='checkbox']");
  await checkBox.uncheck();
  expect  (await checkBox.isChecked()).toBeFalsy();
const BlinkingText= page.locator("//a[@class='blinkingText']");
await expect(BlinkingText).toHaveAttribute("class","blinkingText");
 });

 test('child window handling', async ({browser})=>
  {

  const context = await browser.newContext();
  const page= await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const BlinkingText= page.locator("//a[@class='blinkingText']");
  
  const [page2]=await Promise.all(
    [
  context.waitForEvent('page'), //listen to any new page is opened promise - pending/fullfilled/rejected
  BlinkingText.click(),
  
  ])

  const expectedTitle="We are offering free assistance of providing";
  const actualPage2Title=await page2.locator("//p[contains(text(), 'We are offering')]").textContent();
  expect(actualPage2Title).toContain(expectedTitle);
  console.log(actualPage2Title);


 });





 //await page.locator("//span[@class='checkmark']").click();
  // await page.locator("//select[@class='form-control']");
  // await page.locator("//option[text()='Student']");
  // await page.locator("//input[@id='terms' and @type='checkbox']");

import { test, expect } from '@playwright/test';
// @ts-check
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });




// test("check title", async({page}) =>{
//   await page.goto("https://playwright.dev/")

//   await expect(page).toHaveTitle(/Playwright/)

// })

// test("open new page", async ({page}) => {

//   await page.goto("https://playwright.dev/")

//   await page.getByRole('link', {name: "Get Started"}).click();
//   await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible()
// })











// test('check title', async ({page}) => {
//   await page.goto('https://playwright.dev/')

//   await expect(page).toHaveTitle(/Playwright/)


// })


// test('check navigation', async ({page}) => {
//   await page.goto('https://playwright.dev/')

//   await page.getByRole('link', {name: 'Get Started'}).click();

//   await expect(page.getByRole('heading', {name : 'Installation'})).toBeVisible();


// })








// test('check title', async({page}) => {
//   await page.goto('https://playwright.dev/')
//   await expect(page).toHaveTitle(/Playwright/)



// })


// test('check navigation', async({page}) => {
//   await page.goto('https://playwright.dev/')
//   await page.getByRole('link', {name: 'Get Started'}).click()

//   await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible()


// })










// test('check title', async({page}) => {
//   await page.goto('https://playwright.dev/')
//   await expect(page).toHaveTitle(/Playwright/)

// })



// test('check navigation', async({page}) => {
//   await page.goto('https://playwright.dev/')
//   await page.getByRole('link', {name: 'Get Started'}).click()
//   await expect(page.locator("#installing-playwright")).toBeVisible()
//     // getByRole('id', {name: 'installing-playwright'})

// })









// test('check title', async ({page}) => {
//   await page.goto('https://playwright.dev/')
//   await expect(page).toHaveTitle(/Playwright/)

// })


// test('check navigation', async ({page}) => {
//   await page.goto('https://playwright.dev/')
//   await page.getByRole('link', {name: 'Get Started'}).click()
//   await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible()

// })




test.describe('describe', ()=> {
  test.beforeEach(async ({page})=> {
    await page.goto('https://playwright.dev/')
  })

  test('check url', async ({page})=> {
    await expect(page).toHaveURL('https://playwright.dev/')
  })
})

test('check navigation', async ({page}) => {
  await page.goto('https://playwright.dev/')
  await page.getByRole('link', {name: 'Get Started'}).click()
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible()
})



















//import {test } from "@playwright/test";
//import loginData from '../../test-data/loginData.json';

// test("login with first user", async ({ page }) =>
// {
//     await page.goto('https://www.saucedemo.com');
//     await page.locator('#user-name').fill(loginData[0].username);
//     await page.locator('#password').fill(loginData[0].password);
//     await page.locator('#login-button').click();


// });


import {test } from "@playwright/test";
import loginData from '../../test-data/loginData.json';

    for(const user of loginData)
    {

        test(`multiple set of login data ${user.username}`,async({page})=>
{
await page.goto('https://www.saucedemo.com');
await page.locator('#user-name').fill(user.username);
await page.locator('#password').fill(user.password);
await page.locator('#login-button').click();
})
    }
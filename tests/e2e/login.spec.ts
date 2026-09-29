import{test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

test.describe('Kapruka login test',()=>{

    test('validate user should login successfully',async({page})=>{
const loginPage= new LoginPage(page);
await loginPage.goto();
await loginPage.login(process.env.TEST_EMAIL || 'sushmitharokhade06@gmail.com',process.env.TEST_PASSWORD || 'Sush@1994');
await loginPage.verifyLoginSuccess();
    })

});
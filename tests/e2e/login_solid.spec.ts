import{test,expect} from '@playwright/test';
import { LoginPage_solid } from '../../pages/Loginpage_solid';
//import {config} from '../config/environment';



const TEST_EMAIL=process.env.TEST_EMAIL;
const TEST_PASSWORD= process.env.TEST_PASSWORD;

if(!TEST_EMAIL || !TEST_PASSWORD){
    throw new Error(
    'Missing TEST_EMAIL or TEST_PASSWORD environement variable,'+
    'set these in your .env file or CI/CD secrets before running tests.'
    );
}
test.describe('Kapruka login test',()=>{

    test('validate user should login successfully',async({page})=>{
const loginPage= new LoginPage_solid(page);
await loginPage.goto();
await loginPage.isloaded();
await loginPage.login(TEST_EMAIL,TEST_PASSWORD);
await loginPage.verifyLoginSuccess();
//await page.screenshot({path:'dist/loginpage.png'});

    });

});
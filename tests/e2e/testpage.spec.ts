import { test, expect } from '@playwright/test';
import { LoginPage_solid } from '../../pages/Loginpage_solid';

const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

if(!TEST_EMAIL || !TEST_PASSWORD){
    throw new Error(
    'Missing TEST_EMAIL or TEST_PASSWORD environement variable,'+
    'set these in your .env file or CI/CD secrets before running tests.'
    );
}

test.describe('Login using Data Driven Testing', () => {
    const cases = [
        { label: 'wrong password', email: TEST_EMAIL, password: 'wrong pass', shouldsucceed: false },
        { label: 'wrong email', email: 'wrong@user.com', password: TEST_PASSWORD, shouldsucceed: false },
        { label: 'empty fields', email: '', password: '', shouldsucceed: false },
        { label: 'valid credentials', email: TEST_EMAIL, password: TEST_PASSWORD, shouldsucceed: true },
    ];

    for (const { label, email, password, shouldsucceed } of cases) {
        test(`login:${label}`, async ({ page }) => {
            const loginpage = new LoginPage_solid(page);
            await loginpage.goto();
            await loginpage.isloaded();
            await loginpage.login(email, password);

            if (shouldsucceed) {
                await loginpage.verifyLoginSuccess();
            } 
        });
    }
});

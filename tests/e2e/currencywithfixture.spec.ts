import { test,expect } from '../../fixtures/auth/pageFixtures';
//import { CurrencyPage} from '../../pages/CurrencyPage';


test.describe('kapruka currency dropdown',()=>

{
    test('switch from USD TO INR', async({currencyPage})=>
    {
        await currencyPage.selectcurrency('USD');
        await expect
        await currencyPage.verifyCurrency('USD');

        await currencyPage.selectcurrency('INR');
        await currencyPage.verifyCurrency('INR');

    });
    
});
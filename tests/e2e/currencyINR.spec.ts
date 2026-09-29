import{test,expect} from '@playwright/test';
import { CurrencyPage } from '../../pages/CurrencyPage';

test.describe('karpruka currency dropdown',()=>
{


    test('switch from INR to USD',async({page})=>
    {
        const currency= new CurrencyPage(page);
        await currency.goto();
        await currency.isloaded();
        //await currency.selectcurrency('INR');
       console.log(await currency.getSelectedCurrencyText());
        
        await currency.verifyCurrency('INR');
console.log(await currency.getSelectedCurrencyText());

        await currency.selectcurrency('USD');
        console.log(await currency.getSelectedCurrencyText());
        await currency.verifyCurrency('USD');
    });
})
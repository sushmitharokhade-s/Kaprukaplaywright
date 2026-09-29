import{test,expect} from '@playwright/test';
import { CurrencyPage } from '../../pages/CurrencyPage';

test.describe('karpruka currency dropdown',()=>
{


    test('switch from USD to INR',async({page})=>
    {
        const currency= new CurrencyPage(page);
        await currency.goto();
        await currency.isloaded();
        await currency.selectcurrency('USD');
        await currency.verifyCurrency('USD');


        await currency.selectcurrency('INR');
        await currency.verifyCurrency('INR');
    });
})
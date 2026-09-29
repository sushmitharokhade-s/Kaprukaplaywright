import { test as base, Page } from '@playwright/test';
import { CurrencyPage } from '../../pages/CurrencyPage';
export {expect} from '@playwright/test';
import {ComboGiftsPage} from '../../pages/ComboGiftsPage';
import {TablePage}  from '../../pages/TablePage'



import { LoginPage_solid } from '../../pages/Loginpage_solid';
import { SearchPage } from '../../pages/SearchPage';
import {ProductlistPage} from '../../pages/ProductlistPage';
import {CartPage} from '../../pages/CartPage';
import {OrderPlacementForm} from '../../pages/OrderPlacementForm';

// import {ComboGiftsPage} from '../../pages/ComboGiftsPage';
// Describe new fixtures created in this file and add them to the top of Playwright

type PageFixtures = {
    currencyPage: CurrencyPage;
    comboPage:ComboGiftsPage;
    tablePage:TablePage;

    loginPage:LoginPage_solid;
    searchpage:SearchPage;
    productlistpage: ProductlistPage;
    cartpage:CartPage;
    orderplacementform:OrderPlacementForm;
};

export const test = base.extend<PageFixtures>({
    // 1. SETUP ANYTHING BEFORE PREREQUISITES
    currencyPage: async ({ page }, use) => {
        const currencyPage = new CurrencyPage(page);
        await currencyPage.goto();

        // 2. HAND OFF - user() gives control to the test
        await use(currencyPage);
    },

    //-comboPage fixture (sibling, not nested)...


    comboPage:async({page},use)=>{

        const comboPage= new ComboGiftsPage(page);
        await comboPage.goto();
        await use(comboPage)
    },

    tablePage:async({page},use)=>
        {

            const tablePage= new TablePage(page);
            await tablePage.goto()
            await tablePage.isloaded();
            await use(tablePage);
        },

        loginPage:async({page},use)=>
        {
            const loginPage= new LoginPage_solid(page);
            await loginPage.goto();
            await loginPage.isloaded();
            await use(loginPage);
        },

        searchpage:async({page},use)=>{
            const  searchpage= new SearchPage(page);
            //await searchpage.goto();
            //await searchpage.isloaded();
            await use(searchpage);
        },
        productlistpage:async({page},use)=>{

            const productlistpage= new ProductlistPage(page);
            await use(productlistpage);
        },
        cartpage:async({page},use)=>{
            const cartpage =new CartPage(page);
            await use(cartpage);

        },
        orderplacementform:async({page},use)=>{

            const orderplacementform= new OrderPlacementForm(page);
            await use(orderplacementform);
        }

    });

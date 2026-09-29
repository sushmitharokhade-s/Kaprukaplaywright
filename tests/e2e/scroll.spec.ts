import{test,expect} from '@playwright/test';
import { scrollPage } from '../../pages/ScrollPage';

test.describe('kapruka scroll to event screen',()=>
{
    test('scroll to popular search today', async({page})=>
    {

        const scrollpage= new scrollPage(page);
        await scrollpage.goto();
        await scrollpage.scrolltoBestSellingGift();
        await page.screenshot({path:'dist/afterscroll.png'});

        await page.screenshot({path:'dist/fullpage.png',fullPage:true});
    });
    });



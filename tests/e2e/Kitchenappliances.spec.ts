import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('kapruka Electronica page',()=>

test('verify kitchen appliances tooltip on hover',async({page})=>
    {
  const homePage= new HomePage(page);
  await homePage.goto();
  await homePage.isloaded();
 await homePage.hoverkitchenAppliances();
 const tooltipMessage= await homePage.getKitchenAppliancesTooltip();

console.log('Tooltip message is :', tooltipMessage);
await homePage.verifyKitchenApplianceToolTip();
    }
    ));


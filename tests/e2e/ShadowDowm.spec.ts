import{test} from '@playwright/test';
import { ShadowDOM } from '../../pages/ShadowDOm';

test.describe('xpath practise shadowDOM',()=>

test('shadowDOM field',async({page})=>
    {
  const shadowdom= new ShadowDOM(page);
  await shadowdom.goto();
  await shadowdom.isloaded();
   await shadowdom.entervalue();

}));

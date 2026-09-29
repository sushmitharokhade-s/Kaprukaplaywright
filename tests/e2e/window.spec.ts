import{expect,test} from '@playwright/test';
import { multiplewindows } from '../../pages/multiplewindow';
test("handle new tab",async({page})=>
{
   const window= new multiplewindows(page);
  await  window.goto();
   await window.isloaded();
  const newtab=await window.opennewwindow();
  console.log('new tab url:', newtab.url());
 await expect(
        newtab.getByRole('heading', { name: 'New Window' })
    ).toBeVisible();
});
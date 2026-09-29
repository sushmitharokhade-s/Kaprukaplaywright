import{Page, Locator,expect} from '@playwright/test';
import { BasePage_solid } from './BasePage_solid';

export class CurrencyPage extends BasePage_solid{

    readonly currencyDropDown:Locator;
     constructor(page:Page){
        super(page);
        this.currencyDropDown=page.getByRole('combobox',{name:"Select Currency"});

     }
      async goto():Promise<void>{
     
             await this.navigate('/');
             
         }
         async isloaded(): Promise<void> {
             await expect(this.currencyDropDown.waitFor({state:'visible'}));
            }

            async selectcurrency(currency: 'INR'| 'USD'):Promise<void>{


                await this.currencyDropDown.waitFor({state:'visible'});
                await this.currencyDropDown.selectOption({label:currency});
                await this.page.waitForLoadState('load');
                
            }

async getSelectedCurrencyText(): Promise<string> {
  return (await this.currencyDropDown.locator('option:checked').textContent())?.trim() ?? '';
}


            async verifyCurrency(expected:string):Promise<void>{
                await expect(this.currencyDropDown).toHaveValue(expected);
            }

}
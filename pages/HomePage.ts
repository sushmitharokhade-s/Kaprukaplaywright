import{Page,Locator,expect} from '@playwright/test';
import { BasePage_solid} from './BasePage_solid';

export class HomePage extends BasePage_solid{

readonly  kitchenapplicance:Locator;

constructor(page:Page){
    super(page);
    this.kitchenapplicance= page.getByRole('link',{name:/Kitchen Appliances/});

}

async goto():Promise<void>{
await this.navigate('/online/electronics');

}


async isloaded(): Promise<void> {
    await expect(this.kitchenapplicance).toBeVisible();
}


async hoverkitchenAppliances():Promise<void>
{
  await this.kitchenapplicance.hover();

}

async getKitchenAppliancesTooltip():Promise<string |null>{

return await this.kitchenapplicance.getAttribute('title');
}


async verifyKitchenApplianceToolTip():Promise<void>{
    //dynamic value change
    await expect(this.kitchenapplicance).toHaveAttribute('title',/^Shop For Kitchen Appliances b\(\d+\)b$/);
    //await expect(this.kitchenapplicance).toHaveAttribute('title','Shop For Kitchen Appliances b(631)b');
   

  
}


}

    


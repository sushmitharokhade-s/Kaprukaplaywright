import { Page,Locator,expect } from "@playwright/test";

import { BasePage_solid } from "./BasePage_solid";

export class OrderPlacementForm extends BasePage_solid{

readonly heading:Locator;
constructor(page:Page){
    super(page)
    this.heading=page.getByRole('heading',{name:'Recipient Information'});
}

async orderplacement():Promise<string>{
    return (await this.heading.textContent()) ?? '';
}
	async isloaded(): Promise<void>{
		await this.heading.isVisible();
	}
    
}
import { Page,Locator,expect } from "@playwright/test";

import { BasePage_solid } from "./BasePage_solid";
export class CartPage extends BasePage_solid{


    readonly deliverybutton:Locator;

    constructor(page:Page){
        super(page)
        this.deliverybutton=page.getByRole('button',{name:'Continue to Delivery'});
    }

    async continueDelivery():Promise<void>
    {
await this.click(this.deliverybutton);

    }
	async isloaded(): Promise<void> {
		await expect(this.deliverybutton).toBeVisible();
	}
}
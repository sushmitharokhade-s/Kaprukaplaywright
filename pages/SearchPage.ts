import { Page,Locator,expect } from "@playwright/test";

import { BasePage_solid } from "./BasePage_solid";
export class SearchPage extends BasePage_solid{
    

  readonly searchBox:Locator;
  readonly products:Locator;
  readonly searchresult:Locator;

    constructor(page:Page){
        super(page);
        this.searchBox=page.getByRole('textbox',{name:'SEARCH PRODUCTS..'});
       // this.searchresult=page.getByText('cake', { exact: true });
       this.searchresult=page.getByRole('button',{name:'online search'});
        this.products=page.locator('a[href*="/buyonline/"]');
    }


    async goto():Promise<void>
    {
        await this.navigate('/shops/customerAccounts/accountView.jsp');
    }

async isloaded(): Promise<void> {
         await expect(this.searchBox).toBeVisible();
         await expect(this.searchresult).toBeVisible();
    
    }

    async searchproduct(searchprodu:string):Promise<void>{

    await this.searchBox.fill(searchprodu);
    await this.click(this.searchresult);
    
}

async getProductCount(): Promise<number> {
     await this.products.first().waitFor({state:'visible'});
    return await this.products.count();
  }

  async getFirstProductName(): Promise<string> {
    return await this.products.first().innerText();
  }

  async clickprodut(): Promise<void> {
     await this.click(this.products.first());
  }
}

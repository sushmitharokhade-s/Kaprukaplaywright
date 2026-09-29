import { Page,Locator } from "@playwright/test";

import { BasePage_solid } from "./BasePage_solid";

export interface ProductInfo{
    name:string;
    price:string;
}


export class ComboGiftsPage extends BasePage_solid
{
//readonly page:Page;
readonly productName:Locator
//readonly productPrice:Locator;

constructor(page:Page){

    super(page)
    this.productName= page.locator('.catalogueV2heading');
   
}

async goto(){
    await this.navigate('/online/combogifts');
}

async isloaded(): Promise<void> {
    await this.productName.first().waitFor({state:'visible',timeout:20000});
}

async getFirstProductName():Promise<string>
{
    const nameLocator=this.productName.first();
    await nameLocator.waitFor({state:'visible',timeout:20000});
    const name= await nameLocator.textContent();
    return name?.trim() || '';
}

async getFirstProductprice():Promise<string>
{
    const card= this.productName.first().locator('xpath=ancestor::div[contains(@class,"catalogueV2textBlock")]');
    const priceLocator=card.locator('.lTitlePrice').first();
    await priceLocator.waitFor({state:'visible'});
    const price= await priceLocator.textContent();
    return price?.trim() || '';
}

async listAllProducts():Promise<ProductInfo[]>
{

    await this.isloaded();
   const count= await this.productName.count();
   const results:ProductInfo[]=[];

   for(let i=0;i<count;i++){
    const nameLocator=this.productName.nth(i);
    const name=(await nameLocator.textContent())?.trim()||'';
  const card= nameLocator.locator('xpath=ancestor::div[contains(@class,"catalogueV2textBlock")]');
  const priceLocator=card.locator('.lTitlePrice').first();

  let price='';
  if(await priceLocator.count()>0){
    price=(await priceLocator.textContent())?.trim()||'';
  }
  results.push({name,price});

}
return results;
}
}
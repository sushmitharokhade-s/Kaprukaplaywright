import { Page,Locator,expect } from "@playwright/test";

import { BasePage_solid } from "./BasePage_solid";

// export interface ProductInfo{
//     name:string;
//     price:string;
// }


export class ProductlistPage extends BasePage_solid
{


readonly addToCartButton:Locator;
readonly message:Locator;
readonly viewcartbutton:Locator

constructor(page:Page){

    super(page)
   
    this.addToCartButton = page.getByRole('button', { name: ' Add to Cart' });
//this.addToCartButton = this.page.locator('#addtocartbutton');


    //this.addToCartButton= page.locator('#addtocartbutton');
    this.message=page.getByText('Item added to the cart.');

    //this.viewcartbutton= page.locator('a[href="/shops/checkout/deliveryCartViewPage.jsp"]');
   this.viewcartbutton=page.locator('#hide_cart_popup').getByRole('link', { name: 'View Cart' });
   
}

async goto():Promise<void>
{
    await this.navigate('/online/cakes#Cake');
}
async isloaded(): Promise<void> {
   console.log('URL:', this.page.url());
   await this.addToCartButton.waitFor({timeout: 50000 });
}
async selectfirstproduct():Promise<void>
{
await this.scrolldirectlyToElement(this.addToCartButton);
    await expect(this.addToCartButton).toBeVisible({timeout: 30000});

    // Wait until button is enabled/ready
    //await expect(this.addToCartButton).toBeEnabled({timeout: 30000 });

    // Make sure it is in the viewport
    
    
//      await expect(this.addToCartButton).toBeVisible({ timeout: 15000 });
//      await this.addToCartButton.waitFor({ state: 'visible', timeout: 10000 });
//     await this.click(this.addToCartButton);
//    await expect(this.addToCartButton).toBeEnabled();

    const cardMessage= (await this.message.textContent())?.trim();
    console.log(cardMessage);
   await expect(cardMessage).toContain('Item added to the cart.');

    
//   await expect(this.message.textContent());
//     await expect(this.message).toContainText('Item added to the cart.',{timeout:2000});
}
// async addtocartbutton():Promise<void>{
//     const cardMessage= await this.message.textContent();
//     console.log(cardMessage);
//     await expect(cardMessage?.trim()).toContain('Item added to the cart.');
// }
async viewCart():Promise<void>{
    //await expect(this.viewcartbutton).toBeVisible();
    await this.click(this.viewcartbutton);
    //await this.navigate('/shops/checkout/deliveryCartViewPage.jsp');

}

// async viewCart(): Promise<void> {
//   const cartLinks = this.page.locator(
//     'a[href="/shops/checkout/deliveryCartViewPage.jsp"]'
//   );

//   const count = await cartLinks.count();

//   for (let i = 0; i < count; i++) {
//     if (await cartLinks.nth(i).isVisible()) {
//       await cartLinks.nth(i).click();
//       return;
//     }
//   }

//   //throw new Error('No visible cart link found');
// }

}
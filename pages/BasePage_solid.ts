import{Page, Locator} from '@playwright/test';

export abstract class BasePage_solid{
readonly page:Page;
constructor(page:Page){
    this.page=page;
}

async click(locator:Locator):Promise<void>{

   //await locator.waitFor({state:'visible'})
    await locator.click();
}

async navigate(url:string):Promise<void>{

    await this.page.goto(url,{waitUntil:'load'})
}
async fill(locator:Locator, value:string):Promise<void>{
    await locator.waitFor({state:'visible'})//adding expelice wait for locator as waitfor
    await locator.fill(value);
}


abstract isloaded():Promise<void>;

async scrolltoElement(locator:Locator):Promise<void>{
    await  this.page.mouse.wheel(0,1500);
    await this.page.waitForTimeout(1000);
}
async scrolldirectlyToElement(locator:Locator):Promise<void>{
    await locator.scrollIntoViewIfNeeded();
}

async scrollUsingJavaScript():Promise<void>
    {
        await this.page.evaluate(()=> window.scrollBy(0,1500));
    }



}
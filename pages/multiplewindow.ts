import { Locator, Page } from '@playwright/test'
import { BasePage_solid } from './BasePage_solid'

export class multiplewindows extends BasePage_solid{
    readonly window:Locator; 

    constructor(page:Page){
        super(page);
        this.window= page.getByText('Click Here');
    }

    async goto():Promise<void>
    {
        await this.page.goto('https://the-internet.herokuapp.com/windows')
    }

    async isloaded(): Promise<void>
    {
        await this.window.waitFor({ state: 'visible' });
    }

    async opennewwindow()
    {

        
        const[newtab]= await Promise.all
        ([this.page.context().waitForEvent('page'), this.window.click()]);
        await newtab.waitForLoadState();
        return newtab;

        
//used to close the current tab;
        //await newtab.close();
    }
   
    

}
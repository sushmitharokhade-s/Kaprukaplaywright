import{Page,Locator,expect} from '@playwright/test';
import { BasePage_solid } from './BasePage_solid';



export class scrollPage extends BasePage_solid{
    isloaded(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    readonly bestsellingGifts:Locator;

    constructor(page:Page){
        super(page);
        this.bestsellingGifts= page.getByText('Popular Searches Today:',{exact:true});
    }
    async goto():Promise<void>
    {
        await this.navigate('/shops/events_home.jsp');

    }
    async isLoaded():Promise<void>{
        await expect(this.bestsellingGifts).toBeVisible();
    }

    async scrolltoBestSellingGift():Promise<void>{
        await this.scrolldirectlyToElement(this.bestsellingGifts);

    }
   
}
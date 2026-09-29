import{test,expect,Page,Locator} from '@playwright/test';
import { BasePage_solid } from './BasePage_solid';


export class ShadowDOM extends BasePage_solid{

readonly userName:Locator;

constructor(page:Page){
    super(page)
    this.userName=page.locator('#kils');
}

async goto():Promise<void>{
    await this.page.goto('https://selectorshub.com/xpath-practice-page', {
      waitUntil: 'domcontentloaded'});
}
	async isloaded(): Promise<void> {
        await this.scrolldirectlyToElement(this.userName);
        await expect(this.userName).toBeVisible();

	}
    async entervalue():Promise<void>
    {
        await this.userName.fill("automationtesting");
    }

}
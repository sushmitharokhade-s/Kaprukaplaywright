import{Page, Locator,expect} from '@playwright/test';
import { BasePage_solid } from './BasePage_solid';

import {config} from '../config/environment';



export class LoginPage_solid extends BasePage_solid{

    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
   // readonly loggedin:Locator;

    constructor(page:Page){
        super(page);
        this.emailInput=page.locator('input[name="email"]');
        this.passwordInput=page.locator('input[name="password"]');
        this.loginButton=page.locator('input[type="submit"]');
        //this.loggedin=page.locator('.ka-profile-name');
    }

    async goto():Promise<void>{

        await this.navigate(`${config.baseUrl}${config.loginPath}`);
        
    }
    async isloaded(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }
    async login(email:string, password:string):Promise<void>{

        await this.fill(this.emailInput,email);
        await this.fill(this.passwordInput,password);
        await this.click(this.loginButton);
    }
    
    async verifyLoginSuccess():Promise<void>{
        const currentUrl= this.page.url();
        if(currentUrl.includes('error')){
            throw new Error("Login failed");
        }
        await expect(this.page).not.toHaveURL(/accountLogin/);

    }
}




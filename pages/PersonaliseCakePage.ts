import { BasePage_solid } from "./BasePage_solid";
import{Page,Locator,expect} from  '@playwright/test';
import path from 'path';
//import{path}

export class PersonaliseCakePage extends BasePage_solid{
    //readonly page:page;
    readonly fileInput:Locator;
    readonly fileInfoText:Locator;
    readonly previewImage:Locator;

    constructor(page:Page){
        super(page);
        this.fileInput=page.locator('#imageFile');
        this.fileInfoText=page.locator('.file-info');
        this.previewImage=page.locator('#imageviewer');
    }

    async goto():Promise<void>{
        await this.page.goto('https://www.kapruka.com/shops/cakes/customCakes/personalise_cakes.jsp');
        
    }
    // async isloaded(): Promise<void> {
    //     //file input is likely visually styled/hidden behind the "choose a file" button,
    //     //so chec it's attached to the DOM 
    //     await this.fileInput.waitFor({state:'visible'});
    // }
   

    async isloaded(): Promise<void> {
        //await this.scrolldirectlyToElement(this.fileInput);
    await expect(this.fileInput).toBeAttached();
}

async uploadCakeDesign(relativeFilePath: string): Promise<void> {
   // const normalizedPath = relativeFilePath.replace(/^\/+/, '');
    //const absolutePath = path.resolve(__dirname, '..', normalizedPath);

    await this.scrolldirectlyToElement(this.fileInfoText);
   // from local machine
   // const imagePath = String.raw`C:\test_data\sample-cake-design.jpg`;

   //image stored in test data of project folder
    const imagePath = path.resolve(__dirname,'../test-data/sample-cake-design.jpg');
    await this.fileInput.setInputFiles(imagePath);
}

//     async uploadCakeDesign(relativeFilePath:string):Promise<void>{
// const absolutePath=path.resolve(__dirname,'../..', relativeFilePath);
//         await this.fileInput.setInputFiles(absolutePath);
//     }
    async getFileInfotext():Promise<string>{
        return (await this.fileInfoText.textContent())?.trim()||'';
    }

    async getPreviewImageSrc():Promise<string>{
        return (await this.previewImage.getAttribute('src')) ||'';
    }

    async resetFileInput():Promise<void>{
        await this.fileInput.setInputFiles([]);
    }
    
}
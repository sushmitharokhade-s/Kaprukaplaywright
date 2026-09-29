import { Page,Locator,expect } from "@playwright/test";

import { BasePage_solid } from "./BasePage_solid";

export interface tableRowdata{
    firstname:string;
    email:string;
}

export class TablePage extends BasePage_solid{

    readonly table:Locator;

    constructor(page:Page){
        super(page)
        this.table=page.locator('table').first();;
    }

    async goto():Promise<void>
    {
        await this.page.goto('https://the-internet.herokuapp.com/tables');

    }
    async isloaded(): Promise<void> {
        await this.table.waitFor({state:'visible',timeout:60000});
    }

    //get all row from the table
    //get row count from the table
    //get each row data
    //get all the rows data from the table
    //validate that row has a valid firstname and email
    getRow():Locator
    {
       return this.table.locator('tbody tr');
    }

    async getRowCount():Promise<number>
    {
        const rows=this.getRow();
        return await rows.count();
    }

    async getRowData(rowIndex:number):Promise<tableRowdata>
    {
const row =this.getRow().nth(rowIndex);
const cells=row.locator('td');
const firstName=await cells.nth(1).textContent();
const email= await cells.nth(2).textContent();
        return {
            firstname: firstName?.trim() || '',
            email: email?.trim() || ''
        };

    
    }
    

    async getAllRowsData():Promise<tableRowdata[]> {

        const rowCount= await this.getRowCount();
        const rowsData: tableRowdata[] = [];

        for(let i=0;i<rowCount;i++){
const data= await this.getRowData(i);
rowsData.push(data);
console.log(data);        }
        return rowsData;
    }

    async validateRowData(rowData:tableRowdata):Promise<void> {
        expect(rowData.firstname).toBeTruthy();
        expect(rowData.email).toMatch(/@/);
        console.log(rowData.firstname);
        console.log(rowData.email);
    }
}


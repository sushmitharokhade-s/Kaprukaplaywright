import { test,expect } from '../../fixtures/auth/pageFixtures';
test('should navigate to tables page and validates rows',async({tablePage})=>
{
const rowsCount=await tablePage.getRowCount();
expect(rowsCount).toBeGreaterThan(0);
//const data= await tablePage.getRowData();
   const rowsData=await tablePage.getAllRowsData();
   for(const rowData of rowsData){
    await tablePage.validateRowData(rowData);
   }



});
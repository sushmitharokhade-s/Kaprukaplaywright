
import { test,expect } from '../../fixtures/auth/pageFixtures';
import { CartPage } from '../../pages/CartPage';



test.describe('karpruka end to end testscenario',()=>
{
const TEST_EMAIL=process.env.TEST_EMAIL;
const TEST_PASSWORD= process.env.TEST_PASSWORD;

if(!TEST_EMAIL || !TEST_PASSWORD){
    throw new Error(
    'Missing TEST_EMAIL or TEST_PASSWORD environement variable,'+
    'set these in your .env file or CI/CD secrets before running tests.'
    );
}

    test('Login to application',async({loginPage,searchpage,productlistpage,cartpage,orderplacementform})=>
    {
    await loginPage.login(TEST_EMAIL,TEST_PASSWORD);
    await loginPage.verifyLoginSuccess();
    await searchpage.isloaded();
    await searchpage.searchproduct("cake");
     
    const productCount= await searchpage.getProductCount();
    console.log('Products found:', productCount);

  expect(productCount).toBeGreaterThan(0);

  console.log(
    'First product:',
    await searchpage.getFirstProductName()
  );

  await searchpage.clickprodut();
    await productlistpage.isloaded();
    await productlistpage.selectfirstproduct();
    //await productlistpage.addtocartbutton();
    await productlistpage.viewCart();
    await cartpage.isloaded();
    await cartpage.continueDelivery();
    await orderplacementform.isloaded();
    const placement=await orderplacementform.orderplacement();
    console.log(placement);

 });

//  test('search the product',async({searchpage})=>{

//     await searchpage.searchproduct("cake");
//     const result= await searchpage.getsearchedText();
//     console.log(result);
    

//  });

//  test('navigate to product detail page',async({productlistpage})=>
// {

//     await productlistpage.selectfirstproduct();
// })



})

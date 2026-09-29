import { test,expect } from '../../fixtures/auth/pageFixtures';

test.describe('Combo Gifts page',()=>
{
test('should get the first product Name',async({comboPage})=>
{

    const name= await comboPage.getFirstProductName();
    console.log(name);
    expect(name).toBeTruthy();
    expect(name.length).toBeGreaterThan(0);
});

test('should get the first product Price',async({comboPage})=>
{

    const price= await comboPage.getFirstProductprice();
    console.log(price);
    expect(price).toBeTruthy();
        expect(price).toMatch(/^US\$/);
    
});

test('get all the product',async({comboPage})=>
{
    const product=await comboPage.listAllProducts();
    //console.log(product);
    product.forEach((p, i)=>{
        console.log(`${i+1}.${p.name}-${p.price}`);
    });
    expect(product.length).toBeGreaterThan(0);
    product.forEach(p=>{
        expect(p.name).toBeTruthy();
        
    });
})

});

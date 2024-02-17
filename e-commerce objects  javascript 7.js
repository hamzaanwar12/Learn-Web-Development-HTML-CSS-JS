// Going for the objects in javascript for the first time
let productShirt,productPant,productCoat,userProduct;
productShirt = {
    itemName:"Shirt",
    price : 1000,
    discount: 2.5,
    itemCode: "GK15405"
 }


 /* Factory Function :
            Syntax Convention
            Camel Case (Just like th eother variables in the js document)
            Nothung special
*/

function productDetail(){
    return{
        itemName:"Pant",
        price: 1200 ,
        discount:7.9,
        itemCode:"Jk695"

    }
}

productPant=productDetail();

/* 
    Constructor function:
         Syntax convention
         Pascal Case 
         Something special in the both initializing & Calling
         And it is examplified as given below
*/

function Product_2_detail()
{
    this.itemName = "Coat";
    this.price = 1300;
    this.discount = 3.9;
    this.itemCode = "JL684520";
}



productCoat = new Product_2_detail();

console.log("Simple Declaration = " ,productShirt);
console.log("Factory Function Declaration",productPant);
console.log("Constructor Function = ",productCoat);

 let itemName,price,discount,itemCode; 


function Yourproductdetail(itemName,price,discount,itemCode)
{
    this.itemName =  String(prompt(`What's your product name : `));
    this.price =  Number(prompt(`What's the price of your ${itemName} in dollars ?`));
    this.discount = Number(prompt(`What Discount would you like to give to your customer`));
    this.itemCode =  String(prompt(`What is your product Comber`));

    this.discountValue = function (){
            return (discount*price)/100;;
    }
    
    
    if(this.discount<5)
    {
        console.log("Less Discount Available on this product");
    }
    

    
}

userProduct = new Yourproductdetail()
console.log(userProduct);
console.log(userProduct.discountValue());

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
function addNumbers(num1,num2,num3)
{
    this.sum = num1+num2+num3;
    return sum;
}

function AddNumbersandAverage(num1,num2,num3)
{
    this.sum = num1+num2+num3;
    this.average = this.sum/3;
    return {
        sum:this.sum,
        average:this.average
    }
}


class ProductandMod{
    
    constructor(x1,x2,x3)
    {
        this.prodct = x1*x2*x3,
        this.mod = x1%x2%x3
        return{
            mod:this.mod,
            product:this.prodct
        }
    }
}


let answer = addNumbers(6,5,89);
console.log(answer);

let num1=10,num2=89,num3=1;
answer = AddNumbersandAverage(num1,num2,num3)
console.log(answer);


answer = new  ProductandMod(6,5,4);
console.log(answer);
//the following is the example of the voiod function

function greet_my_friend(name)
{
    console.log("Hi" +", "+name);
}

name="jacob";;
name1="Berzellius";
name2="Who are you?";

greet_my_friend(name);
greet_my_friend(name1);
greet_my_friend(name2);

//  The following is the value returning function

//===========>  factorial Function

function find_factorial(number)
{
    let factorial=1;

    for(let i=1;i<=number;i++)
    {
        factorial*=i;
    }

    return factorial;
}

let number=7,num4=4;

factorial_1=find_factorial(number);
factorial_2=find_factorial(num4);

// console.log(factorial_1);
// console.log(factorial_2);

let y=1;
while (y<5) {
    console.log(`The factorial of number ${y} is :`,find_factorial(y));
    y++;
    
}

//------------------------------------------------------------

//==============>   addition function.

function sum_mer(a,b,c)
{
    let addition;
    addition=a+b+c;
    return addition;
}

let a=4,b=5,c=6,sum;
sum=sum_mer(a,b,c);
console.log(sum);

console.log("For what you are wating");


 /*
 let x=1,result=1;
 no=5;
 for(x=1;x<=no;x++)
 {
     result*=x;
 }
 console.log("The factorial of 5 : ",result);
 */

 
name = "hi";
name="bi";
console.log("here IS THE NAME,sO IT is mutable ",name);






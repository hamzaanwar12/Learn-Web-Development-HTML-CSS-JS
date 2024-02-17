/*
    sort function sort the elements of array by convertig them
    to thestrings and hence we can say that what ever the type of
    element of array is, it is compared as a string to the other 
    element.
*/

let names = ['hamza','usman','junaid','haris','wasiq'];
let result =names.sort();
console.log(result)

// it wass pretty good because the povided all the elemnts of the array are already strings but if say that there are numbers in the strings in the arrray and then we will sort without the provided algorithm according to which the .sort() has to sort the things then it will produce the devastating results just like the following:

let number = [1,5,6,7,1011,6000,9,4000,666,777555,9.1]
console.log(number.sort());
let AlgoSort = (Num1,Num2)=>{
    return Num1-Num2;
}

console.log(number.sort(AlgoSort));

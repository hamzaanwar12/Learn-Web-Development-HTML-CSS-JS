const confused = (h1,h2)=>{
    return h1+h2;
}


let arr = [2,5,4,6,9,8]
let arr_3 = arr.reduce(confused);
let arr_4 = arr.reduce(confused,-10);

//  arr_2 = arr.reduce((h1,h2)=>{
//      return h1+h2;
//  },-10)

 
//  console.log(arr_2)
 console.log(arr_3);
 console.log(arr_4);

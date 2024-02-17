/*
    function dice()
    {
        let number=Math.random()%5;
        number+=1;
        number=Number(number);
        return number;
    }

console.log(dice());


tHE ANSWEr produced here wil be just between the 0 and 1 and it will give the values like the 
    0.225642
    0.9582
    0.1526842
    anything like the above given examples

    in javascript the random just give the some double or float type values as a result between the 0 and 1
    , it can be an any vlue in the points 

    if we want to hav the integer value then we have some sort of following procedure uite different than the 
    c++ because in this we don't have  to provide the seed value with random and the modulo to funtion
    to get the desired range of values 

    In javascrit we can get the same result by just using the in built function of the round()

    just like given below :

*/

function dice()
{
    let range_deciding_factor = 10;
    let number=Math.random()*range_deciding_factor;
    number %= 5;
    number+=1;
    // number=Number(number);
    return number;
}

console.log(dice());

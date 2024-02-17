function joining_function(array, separator = undefined) {
    result = "";
    /*
    
        if(separator==undefined)
        {
            for(let x=0; x<array.length; x++)
            {
                if(x!=array.length-1)
                {
                    result =(result+=array[x])+",";
                }
                else if(x==array.length-1)
                {
                    result += array[x];
                }
            }
    
        }
    
        else
        {
            for(let x=0; x<array.length; x++)
            {
                if(x!=array.length-1)
                {
                    result =(result+=array[x])+separator;
                }
                else if(x==array.length-1)
                {
                    result += array[x];
                }
            }
    
    
        }
    
        return result;
    
    */

    array.foreach((x, i) => {

        if (separator == undefined){
            separator=",";
        }

            if (i != array.length - 1) 
            {
                result += (array[i] + separator);
            }


            else 
            {
                result += array[i];
            }
        
    })



}





//      ======>the following is the dummy

// let x=[2,52,"scdg"];
// document.write(`the length of array is: \n ${x.length}`)

let type = prompt("Which tpe of array you want to give", "NUmber or String type or Mixed");
let numberOfvalues = Number(prompt("HOw many values you want to enter", ""));
array = [];
for (let x = 0; x < numberOfvalues; x++) {
    array[x] = (prompt(`Enter value number ${x + 1}`));
}



let confirmation = confirm("Do you want to join the entered array");

if (confirmation) {
    let separator_asking = confirm("Do you want to give any separator in the joinment  of your array values");

    if (separator_asking) {
        let separator = prompt(`Which separator would oyu like to give through the enterd values should be joined`);
        let result = joining_function(array, separator);
        console.log(result);
    }

    else {
        document.write(`The Entered array is as follow: \n ${joining_function(array)}`)
        console.log(`The Entered array is as follow: \n ${joining_function(array)}`)
    }


}

else {
    console.log(`Yur entered array is given as folow: \n ${array}`);
}

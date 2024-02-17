//checking the certain conditions

// var temp=35;
// var temp=32;
// var temp=23;
var temp = -23;
console.log("temp = ",temp);

if(! temp<=0 )
{
    if(temp>35)
    {
        console.log("Its Hot Today")

    }
        
    else if(temp>30 && temp<35)
        console.log("Its Mild Today")

    else if(temp<30&&temp>0)
        console.log("Its Cool Today")
}

else
{
    console.log("Its Cold Today")
}

//=========>    Trying the Switch Statements

var weather="warm"
switch(weather)
{           
        // ========>    It is the real answer but now it is commented

        //  case "warm":
        //  console.log("The weather is ",weather);
        //  break;

        case "hot":
        console.log("The weather is ",weather);
        break;

        case "WarM":
        console.log("The weather is ",weather);
        break;

        case "Cold":
        console.log("The weather is ",weather);
        break;
      
      
        case "Freezing":
        console.log("The weather is ",weather);
        break;

        default :
        console.log("The weather is unknown");
        break;
        console.log("The actual weather is :",weather);
}
//It would be okay without the break statement after the default  there will be no syntax error

/*    There is an important poit to remember   in the following points   */

console.log("sum is :",1+2+5+6*7);

//========>     But the answer wil be different in the following case

// default :
// console.log("The weather is unknown");
// break;
// console.log("The actual weather is :",weather);
// }
// console.log("sum is :",1+2+5+6*7);

/*
    It will ead to the execution of the sum wali line without the execution of the 
    actual weather line
*/
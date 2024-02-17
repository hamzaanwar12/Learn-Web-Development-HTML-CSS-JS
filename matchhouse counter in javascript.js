//  `   just pretending/trying to calm myself that i am not wasting my time

function Matchstickscounter(noOfhouses){

        this.houses = noOfhouses;
        this.usedMatches = (noOfhouses*5)+1;
        return this.usedMatches;

}


function houseMaker(noOFmatches){

    let manufacturable_houses;
    if(noOFmatches<6)
    {
        console.log("Minimum no. of sticks required to make a complete house = 6")
    }

    else if(noOFmatches>=6 && noOFmatches<11)
    {
        manufacturable_houses = (noOFmatches)/6;

    }

    else if(noOFmatches>=11)
    {
        manufacturable_houses = (noOFmatches-1)/5
    }

    return Math.ceil(manufacturable_houses);

}


console.log("I am here providing my service as a calculator for finding  that\n how many houses you can built from the provided number of sticks and \n how many sticks required to built the given number of houses");
console.log("So, Let's Go!");
let x = prompt("How many times you want to make calculations");
x = Number.parseInt(x);
for(let i=1;i<=x;i++)
{
    console.log("First entry will be of of the matchsticks required to make the houses and second will e the vice versa")

    console.log(`So here is the ${i} attempt`);
    let matchSticks = eval(prompt("How many number of sticks you have or want to build the houses from that number fo match sticks "))
    console.log("You can build the following number of houses through the given number of houses : \n",houseMaker(matchSticks)) ;

    let houseNumber = eval(prompt("For how many houses you want to calculate the number of match sticks : \n"))
    let x = new  Matchstickscounter(houseNumber)
    console.log("you required the following number of matchsticks to built the given number of houses",x);

    document.write("Welcome to Javascript",i)
    document.write(`that was the ${i} attempt to calculate the house and matchsticks from eachother`);
    
}
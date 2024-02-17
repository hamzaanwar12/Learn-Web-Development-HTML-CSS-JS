let options = "SWG";
let userChoice = prompt("Enter first initial of your choice among the Snake,Gun, and Water","S");


let backendChoice = options.charAt(Math.floor(Math.random() * options.length));

document.write(` Here is my choice ${backendChoice}`);
document.write(`</br> So, `);

if(backendChoice.match(userChoice.toUpperCase()) )
{
    document.write("Its a Draw");
}


else if(backendChoice == "S" && userChoice.toUpperCase()=="W")
{
    document.write("You Lost");
}



else if(backendChoice == "W" && userChoice.toUpperCase()=="S")
{
    document.write("You Won");
}



else if(backendChoice == "W" && userChoice.toUpperCase()=="G")
{
    document.write("You Lost");
}



else if(backendChoice == "G" && userChoice.toUpperCase()=="W")
{
    document.write("You Won");
}


else if(backendChoice == "S" && userChoice.toUpperCase()=="G")
{
    document.write("You Won");
}


else if(backendChoice == "G" && userChoice.toUpperCase()=="S")
{
    document.write("You Lost");
}


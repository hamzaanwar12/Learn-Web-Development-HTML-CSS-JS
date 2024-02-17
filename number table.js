const table = document.body.firstElementChild;
// console.log(table);

const tableArray = Array.from(table.rows);
console.log(tableArray);

// the following not working
// const tableCells = Array.from(tableArray.tr.cells);

/* 
    tableCells = tableArray[0].cells[0];
    It will return the collection of all cells in the rows in the table

*/

// newTestFunction();

const colorRandomizer = () => {
    return Math.floor(Math.random() * colors.length)
}
// Remember the previous logic
// const newTestFunction = ()=>{
//     console.log("Heee HHAaa!");
// }



const colors = ["red", "green", "yellow", "white", "orange", "pink", "brown", "burlywood", "blue", "blueviolet", "coral", "purple"];
console.log(colors.length)

let timeMaking = ()=>{
    for (let i = 0; i < tableArray.length; i++)
    {
        for (let y = 0; y < Array.from(tableArray[i].cells).length; y++) 
        {
            let x = colorRandomizer();
            console.log(x)
            console.log(colors[x])
         with (tableArray[i].cells[y])
             {
            style.background = colors[x]
            }
        } 
    }
       
}

timeMaking();


setTimeout(timeMaking,3000);
// setInterval(timeMaking,5000)
// clearInterval(timeMaking);


table.caption.style.background = colors[colorRandomizer()]
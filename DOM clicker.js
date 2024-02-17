let divArray =  Array.from(document.getElementsByTagName("div"))
console.log(divArray)

let a  = divArray[0]
let b = document.getElementById("mouseenter");
let c = document.getElementsByClassName("mouseleave")
let d = c[0];

let clicking = ()=>
{
    // not working following
    // a.firstElementChild.innerHTML =  "<br><h1><strong><em>Its Double click What you want me to open man</strong></em></h1>
    alert("Its just a click What you want me to open man");

}

let mouseenter = ()=>
{
    alert("you entererd mouseenter");
    console.log("Hi whats going on!");
    console.log("Its mouseenter")
}

let mouseleave = ()=>
{
    alert("you left mouseenter");
    console.log("Hi whats not going on!");
    console.log("Its mouseleave")
}


//adding eventlisteners



a.addEventListener("click",clicking)
d.addEventListener("mouseleave",mouseleave)
b.addEventListener("mouseenter",mouseenter)

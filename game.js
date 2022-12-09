let numofsq = 6;
let colors = [];
let color;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let reset = document.getElementById("reset");
let button = document.querySelector("button");
let modebuttons = document.querySelectorAll(".mode");

init();
function init(){
    setUpModeButtons();
    //inintial display of squares

    setUpSquares();
    
    revision();
}
function revision(){
    colors = genRandomColors(numofsq);
    color = pickedColor();
    colorDisplay.textContent = pickedColor();
    for(let i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "rgb(28, 133, 159)";
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
}

reset.addEventListener("click", function(){
    colors = genRandomColors(numofsq);
    color = pickedColor();
    colorDisplay.textContent = pickedColor();
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "rgb(28, 133, 159)";
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
})


function changecolor(color){
    //loop through all squares
    for(let i=0; i<color.length; i++){
        //change all colors
        squares[i].style.background = color;
        h1.style.backgroundColor = color; 
    }
}
function pickedColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function genRandomColors(x){
    //make an array
    let arr = [];
    //add x random colors to array
    for(let i=0; i<x; i++){
        //get random colors and push in array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}
function randomColor(){
    //pick a "red" from 0-255
    let red = Math.floor(Math.random()*256);
    
    //pick a "green" from 0-255
    let green = Math.floor(Math.random()*256);
    
    //pick a "blue" from 0-255
    let blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", "+blue + ")";
}

function setUpModeButtons(){
    //mode buttons event listeners
    for(let i=0; i<modebuttons.length; i++){
        modebuttons[i].addEventListener("click", function(){
            modebuttons[0].classList.remove("selected")
            modebuttons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numofsq = 3: numofsq = 6;
            revision();
        })
    }
}

function setUpSquares(){
    for(let i=0; i<squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of picked square
            let clickedcolor = this.style.backgroundColor;
            if(clickedcolor === color){
                messageDisplay.textContent = "Correct!";
                reset.textContent = "Play Again?"
                changecolor(clickedcolor);
            }
            else{
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again";
                messageDisplay.style.fontFamily = "Montserrat", sans-serif;
                messageDisplay.style.textTransform = uppercase;
                messageDisplay.style.fontWeight = 1000;
            }        
        });
    }
}
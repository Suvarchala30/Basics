const directions = document.querySelector(".directions")
const message = document.querySelector(".message")
const button = document.querySelector("button")
const gameArea = document.querySelector(".gameArea")
const results = document.querySelector(".results")

let inPlay = false;
let count = 0;
let playArea  = {

}

function showMessage(notification){
    message.innerHTML = `<h3>${notification}</h3>`
}


function random(number){
    let val = Math.floor(Math.random()*number)

    return val;
}



showMessage("Click Start to Begin!")

button.addEventListener("click",function(){

    inPlay = true;

    button.style.display = "none"
    directions.style.display = "none";
    results.innerHTML = ''
    count = 0;

    showMessage("Starting...");
    showBox();
})


function showBox(){
    playArea.timer = "Testing";
}
console.log(playArea);
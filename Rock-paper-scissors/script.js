const pScore=document.getElementById("playerScore")
const cScore=document.getElementById("computerScore")
const pSelect=document.getElementById("playerSelect")
const cSelect=document.getElementById("computerSelect")

const message=document.getElementById("message")
const submit=document.getElementById("submit")

let playerScore = 0;
let computerScore = 0;

let gameActive = false;

submit.addEventListener("click",function(){
    const board=document.getElementById("boards")
    const select=document.getElementById("select")

    board.style.display="block"
    select.style.display="block"
    submit.style.display="none"
    gameActive=true;
})
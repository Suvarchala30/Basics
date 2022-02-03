const pScore=document.getElementById("playerScore")
const cScore=document.getElementById("computerScore")
const pSelect=document.getElementById("playerSelect")
const cSelect=document.getElementById("computerSelect")

const message=document.getElementById("message")
const submit=document.getElementById("submit")

const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissors=document.getElementById("scissors")

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

rock.addEventListener("click",)
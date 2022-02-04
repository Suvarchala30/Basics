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

rock.addEventListener("click",()=> gameFlow(rock.id))
paper.addEventListener("click",gameFlow.bind(this,paper.id))
scissors.addEventListener("click",gameFlow.bind(this,scissors.id))

function gameFlow(playerSelection){
    const winnerObject=getMeWinner(playerSelection)
    const winner=winnerObject.winner
    const compMove=winnerObject.computerMove
    displaySelection('player',playerSelection,winner)
    displaySelection('computer',compMove,winner)
    scoreBoard(winner)
    message.innerHTML= winner
    whoWon()
}


function getMeWinner(playerSelection){
    let computerSelection=computerPlay()
    let winner=playerRound(playerSelection,computerSelection)
    winner= winner===0 ? 'Draw!' : (winner===1?'Player Won!':'Computer Won!') 
    return ({
        winner:winner,
        computerMove:computerSelection
    })

}
function computerPlay(){
    let arr=['rock','paper','scissors']
    let random= arr[Math.floor(Math.random()*arr.length)]
    return random
}

function playerRound(ps,cs){
    if(ps===cs)
    return 0
    else if(ps=='rock'&&cs=='paper')
    return -1
    else if(ps=='rock'&&cs=='scissors')
    return 1
    else if(ps=="paper" && cs =="scissors")
        return -1
    else if(ps=="paper" && cs =="rock")
        return 1
    else if(ps=="scissors" && cs=="rock")
        return -1
    else if(ps=="scissors" && cs=="paper")
        return 1
}
function displaySelection(whoIsPlaying,selection,result){
    if(whoIsPlaying=='player'){
        pSelect.innerHTML=`<i class="fas fa-hand-${selection}"></i>`

        if(result==='Player Won!'){
            pSelect.style.color='green'
            cSelect.style.color='red'
        }
    }else{
        cSelect.innerHTML=`<i class="fas fa-hand-${selection}"></i>`
        if(result=='Computer Won!'){
            cSelect.style.color='green'
            pSelect.style.color='red'
        }
    }
    if(result==='Draw!'){
        pSelect.style.color=''
        cSelect.style.color=''
    }
}

function scoreBoard(result){

    if(result=="Player Won!"){
        playerScore++
        pScore.innerText=playerScore
        cScore.innerText=computerScore
    }else if(result=='Computer Won!'){
        computerScore++
        pScore.innerText=playerScore
        cScore.innerText=computerScore
    }else{
        return false
    }

}

function whoWon(){
    if(gameFinished()){
        if(playerScore==5){
            message.innerText='Player is the winner! Congratulations!'
        }else{
            message.innerText='Computer is the winner! You Lose'
        }
        reset()
    }
}

function gameFinished(){
    if(playerScore===5 || computerScore===5){
        return true
    }
    else
    return false
}

function reset(){
    setTimeout(function(){
    playerScore=0
    computerScore=0
    pSelect.innerText=''
    cSelect.innerText=''
    pScore.innerText=''
    cScore.innerText=''
    message.innerText='Choose rock,paper or scissor'
    },3000)
}
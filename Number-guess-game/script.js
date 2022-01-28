const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const startOver=document.querySelector(".resultParas")
const loworHi=document.querySelector(".loworHi")

let previousGuesses=[]
let numGuesses=0
let random=parseInt(Math.random()*100+1)
//console.log(random)
let maxGuesses=10
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
})
function validateGuess(guess){
    previousGuesses.push(guess)
    if(previousGuesses.length-1===maxGuesses){
        displayGuesses(guess)
        displayMsg(`Game over! Number is ${random}`);
        endGame();
    }else{
        displayGuesses(guess)
        checkGuess(guess)
    }
}
function displayGuesses(guess){
    guessSlot.innerHTML+=`${guess} `
    userInput.value=''
    numGuesses++
    let remainingGuesses=maxGuesses-numGuesses
    if(remainingGuesses<0){
        remainingGuesses=0
    }
    remaining.innerHTML=remainingGuesses

}
function displayMsg(message){
    loworHi.innerHTML=`<h1>${message}</h1>`
}
function checkGuess(guess){
    if(guess===random){
        displayMsg(`You guessed Correctly`);
        endGame();
    }else if(guess<random){
        displayMsg('Too low! Try a high number')
    }else{
        displayMsg('Too High! Try a low number')
    }
}
const pEl=document.createElement("p")
function endGame(){
    userInput.value=''
    pEl.classList.add("button")
    pEl.style.cursor="pointer"
    pEl.innerHTML=`<h1 onclick="newfunc()">Start New Game!</h1>`
    startOver.appendChild(pEl)
    userInput.disabled=true
    submit.disabled=true

}
function newfunc(){
    location.reload()
}
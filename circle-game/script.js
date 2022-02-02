const message = document.querySelector(".message");
const button = document.querySelector("button");
const gameArea = document.querySelector(".gameArea");
const results = document.querySelector(".results");
const directions = document.querySelector(".directions");

let inPlay = false;
let count = 0;
let playArea = {};

function showMessage(notification){
    message.innerHTML=`<h3>${notification}</h3>`
}

function random(number){
    return Math.floor(Math.random()*number)
}

function getColor(){
    function color(){
        let hex=random(255).toString(16)
        return hex.padStart(2,"0")
    }
    return "#"+color()+color()+color()
}


function myBox(){
    let element=document.createElement("div");
    element.classList.add("box");
    element.style.top=random(getTopHeight())+"px"
   element.style.left=random(getLeftWidth())+"px"
   element.style.backgroundColor=getColor();
   element.start=new Date().getTime();
   element.addEventListener("click",hit);

   playArea.tempTimer=setTimeout(
       () => hit({ target: {start: element.start } }),
       2000
   );
    

    gameArea.appendChild(element);
}



function hit(e){
    let start=e.target.start;
    let end=new Date().getTime();

    let duration=(end-start)/1000;

    if(playArea.tempTimer){
        clearTimeout(playArea.tempTimer);
    }
    let maxDuration=2
    clearTimeout(playArea.timer);
    showMessage(`It took you ${duration} seconds to click`);
    if(duration > maxDuration){
        gameArea.children[0].remove();
        results.innerHTML=`Too slow <span id="loser"> You Lost!</span>
        Your score was ${count}.<br> Click the start button to play again!`;

        resetGame();
    }else{
        gameArea.children[0].remove();
        playArea.timer=setTimeout(myBox,random(4000));
        count++;
        if(count===15){
            results.innerHTML=`You reached ${count}! <span id="winner"> You win!</span>
            <br> Click the start button to play again!`;
            resetGame();
        }else{
            results.innerHTML=`Score: ${count} of 15`
        }

    }

}

function resetGame(){
    clearTimeout(playArea.timer);
    inPlay=false;
    button.style.display="block"
}

function getTopHeight(){
    let maxheight=gameArea.clientHeight
    if(maxheight<=100)
    maxheight+=200
    else
    maxheight-=200

    return maxheight
}

function getLeftWidth(){
    let maxwidth=gameArea.clientWidth
    if(maxwidth<=100)
    maxwidth+=200
    else
    maxwidth-=200

    return maxwidth
}


function showBox(){
    playArea.timer=setTimeout(myBox,random(4000))
}

showMessage("Click start to Begin!")

button.addEventListener("click",function(){
    inPlay=true
    directions.style.display="none"
    button.style.display="none"
    results.innerHTML=""
    count=0
    showMessage("Starting...")
    showBox()
});
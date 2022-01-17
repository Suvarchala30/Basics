const time=document.getElementById("display")
const playbtn=document.getElementById("buttonPlay")
const pausebtn=document.getElementById("buttonpause")
const resetbtn=document.getElementById("buttonreset")
var hr=0
var min=0
var sec=0
var ms=0
var timestopped=true

function startstopwatch(){
    if(timestopped){
        timestopped=false
        setTimeout(stopwatchcycle,1000)
        showbutton("PAUSE")
    }
}

function stopwatchcycle(){
    if(timestopped==false){
        sec=parseInt(sec)
        min=parseInt(min)
        hr=parseInt(hr)
        sec+=1
        if(sec==60){
            min+=1
            sec=0
        }
        if(min==60){
            hr+=1
            min=0
        }
        if(sec<10){
            sec="0"+sec
        }
        if(min<10){
            min="0"+min
        }
        if(hr<10){
            hr="0"+hr
        }
        time.innerHTML=`${hr}:${min}:${sec}`
        setTimeout(stopwatchcycle,1000)
    }
}

function stopstopwatch(){

    if(timestopped==false){
        timestopped=true
    }
    showbutton("PLAY")

}

function resetstopwatch(){
    time.innerHTML="00:00:00"
    
    timestopped=true
    hr=0
    min=0
    sec=0
    showbutton("PLAY")
}
function showbutton(buttonkey){

    if(buttonkey=="PLAY"){
        playbtn.style.display="block"
        pausebtn.style.display="none"
    }
    else{
        playbtn.style.display="none"
        pausebtn.style.display="block"
    }

}

playbtn.addEventListener("click",startstopwatch)
pausebtn.addEventListener("click",stopstopwatch)
resetbtn.addEventListener("click",resetstopwatch)
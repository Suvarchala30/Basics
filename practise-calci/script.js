const display = document.querySelector(".display")

function digit(value){
    display.innerHTML=display.innerHTML+value;
}

function clearxyz(){
    display.innerHTML="";
}
function back(){
    display.innerHTML=display.innerHTML.slice(0,-1);
}

function submit(){
    display.innerHTML=eval(display.innerHTML)
}

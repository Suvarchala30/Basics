const click=document.querySelector(".start");
const progress = document.querySelector(".bar")
const percent = document.querySelector(".percent")

let width=0;
click.addEventListener("click",(e)=>{
    e.preventDefault();
    setInterval(incWidth,10)
    function incWidth(){
        width++
        if(width<=100){  
            progress.style.width=width+"%";

        percent.innerHTML=width+"%"
        }
    }
    if(width>100){
        clearInterval(incWidth);
    }
})
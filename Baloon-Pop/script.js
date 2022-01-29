const container=document.querySelector(".ballon-container")
let popped=0
for(let i=1;i<=25;i++){
   const divEl= document.createElement("div")
    divEl.classList.add("balloon")
    divEl.innerText="POP!"
    const randColor=getColor()
    divEl.style.backgroundColor=`${randColor}`
    divEl.style.color=`${randColor}`
    container.appendChild(divEl)
    divEl.addEventListener("mouseenter",function (){
        if(divEl.style.backgroundColor!=="transparent"){
            popped++
        }
        divEl.style.backgroundColor="transparent"
        checkAllPopped()
    })

}
function checkAllPopped(){
    if(popped==25){

let zeroBalloon=document.querySelector(".zero-balloon")
        console.log("All are popped")
        zeroBalloon.style.display="block"
        container.innerHTML=''
    }
}
function getColor(){
    return `rgb(${random(255)},${random(255)},${random(255)})`
}
function random(number){
    let val=Math.floor(Math.random()*number)
    return val
}
const liters=document.getElementById("litres")
const remained=document.getElementById("remained")
const percentage=document.getElementById("percentage")
const smallcups=document.querySelectorAll(".smallcups")


smallcups.forEach((cups,index)=>{
    cups.addEventListener("click",()=>{
        highlightcups(index)
    })
})
updatebigcup()

function highlightcups(index){

    if(index===(smallcups.length-1) && smallcups[index].classList.contains("full")){
        index--
    }else if(smallcups[index].classList.contains("full")&&!smallcups[index].nextElementSibling.classList.contains("full")){
        index--
    }

    smallcups.forEach((cup,localindex)=>{

        if(localindex<=index)
        cup.classList.add("full")
        else
        cup.classList.remove("full")

    })
    updatebigcup()
}
function updatebigcup(){
    const fullcups=document.querySelectorAll(".smallcups.full").length
    const totalcups=smallcups.length

    if(fullcups===0){
        percentage.style.visibility="hidden"
        percentage.style.height="0"
    }else{
        percentage.style.visibility="visible"
        percentage.innerText=`${fullcups/totalcups *100}%`
        percentage.style.height=`${fullcups/totalcups * 330}px`
    }

    if(fullcups===totalcups){
        remained.style.visibility="hidden"
        remained.style.height="0"
    }else {
        remained.style.visibility="visible"
        litres.innerText=`${2-(250*fullcups/1000)}L`
    }
}
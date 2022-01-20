const reset=document.getElementById("reset_button")
const change=document.getElementById("change_button")

reset.addEventListener("click",resetgrid)
change.addEventListener("click",changecolor)

function resetgrid(){
    for(let i=1;i<=9;i++){
        const griditem=document.getElementById(i)
        griditem.style.backgroundColor = "transparent"
    }
}

function changecolor(){
    const blockid=document.getElementById("block_id")
    const colorid=document.getElementById("color_id")
    if(!blockid.value){
        alert("Please enter block id")
    }
    if(!colorid.value){
        alert("Please enter color id")
    }
    resetgrid()
    const griditem=document.getElementById(blockid.value)
    griditem.style.backgroundColor= colorid.value
    blockid.value=""
    colorid.value=""
}
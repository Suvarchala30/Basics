const colors=['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const container=document.getElementById("container")

const Squares=598
for(let i=0;i<Squares;i++){
    const square=document.createElement('div')
    square.classList.add('square')

    square.addEventListener("mouseover",()=>{
        setcolor(square)
    })
    square.addEventListener("mouseout",()=>{
        removecolor(square)
    })
    container.appendChild(square)
}


function setcolor(element){
    const color=randomcolor()
    element.style.background=color
    element.style.boxShadow= `0 0 2px $color, 0 0 10px $color`
    //element.innerHTML='Suv'

}

function removecolor(element){
    element.style.background="#1d1d1d"
    element.style.boxShadow="0 0 2px #000"
    //element.innerHTML=''
}
function randomcolor(){
    const index=Math.floor(Math.random()*colors.length)
    return colors[index]
}
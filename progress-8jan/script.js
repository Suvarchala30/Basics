const prev=document.getElementById('prev')
const next=document.getElementById('next')
const progressb=document.getElementById('progress')
const circles=document.querySelectorAll('.circle')

let currentActive=1
let numberOfCircles=circles.length;

next.addEventListener('click',()=>{
    currentActive++
    if(currentActive>numberOfCircles){
        currentActive=numberOfCircles
    }
    console.log(currentActive)
    updateCss()
    
})

prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
    console.log(currentActive)
    updateCss()
})
function enableDisable(){
    if(currentActive===1){
        prev.disabled=true
    }else if(currentActive===numberOfCircles){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}

function updateCss(){
    for(var i=0;i<numberOfCircles;i++){
        const circle=circles[i]

        if(i<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    }
    const activexyz=document.querySelectorAll('.active')

    //calculate width
    //set progress bar width- formula
    const widthxyz=(activexyz.length-1)/(circles.length-1)*100
    progressb.style.width=widthxyz
    enableDisable()
}
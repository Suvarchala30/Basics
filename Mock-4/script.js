const bigBlock = document.querySelector(".blocks")
const smallBlocks = document.querySelectorAll(".block")

for(let i=0;i<smallBlocks.length;i++){
    smallBlocks[i].addEventListener("click",validateColor());
}
const RandomColors=()=>{
    return Math.floor(Math.random()*256)
}

getRandomBlock()
var target;
function getRandomBlock(){
    
       const temp= Math.floor(Math.random()*smallBlocks.length)
       
     console.log(temp)
     const style=window.getComputedStyle(smallBlocks[temp],null)
     console.log(style)
     console.log(smallBlocks[temp].style)
     
     target = style.backgroundColor

     
   
}
console.log(target)

function Display(){
    for(let i=0;i<smallBlocks.length;i++){
        let randomColor1=RandomColors()
let randomColor2=RandomColors()
let randomColor3=RandomColors()
        smallBlocks[i].style.backgroundColor=`rgba(${randomColor1},${randomColor2},${randomColor3})`
    }
}
Display()

function validateColor(){

}
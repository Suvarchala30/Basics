const sliderContainer=document.querySelector(".slider-container")
const leftSlide=document.querySelector(".left-slide")
const rightSlide=document.querySelector(".right-slide")

const upBtn=document.querySelector(".up-button")
const downBtn=document.querySelector(".down-button")

const slideLength=rightSlide.querySelectorAll("div").length 
console.log(slideLength)

let currentSlideIndex=0

leftSlide.style.top=`-${(slideLength-1)*100}vh`

upBtn.addEventListener("click",()=>changeSlide("up"))
downBtn.addEventListener("click",()=>changeSlide("down"))

function changeSlide(direction){
    const sliderHeight=sliderContainer.clientHeight
    if(direction==="up"){
        currentSlideIndex++
        if(currentSlideIndex>slideLength-1){
            currentSlideIndex=0
        }
    }
    else if(direction==="down"){
        currentSlideIndex--
        if(currentSlideIndex<0){
            currentSlideIndex=slideLength-1
        }
    }
    rightSlide.style.transform=`translateY(-${currentSlideIndex*sliderHeight}px)`
    leftSlide.style.transform=`translateY(${currentSlideIndex*sliderHeight}px)`
}

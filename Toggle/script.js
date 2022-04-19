const clickBtn=document.querySelector(".click")
const displayArea=document.querySelector(".display-area")
clickBtn.addEventListener("click",()=>{
    //console.log("I'm clicked")
    displayArea.classList.toggle("active")
})
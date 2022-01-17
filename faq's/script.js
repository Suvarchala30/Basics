let question=document.querySelector(".q1")
let icon=document.getElementsByClassName("aicon")
let answer=document.querySelector(".answer")
q1.addEventListener("click",()=>{
    this.classList.toggle("active")
    var panel=this.nextElementSibling
    if(panel.style.display==="block"){
        panel.style.display="none";
    }
        else{
        panel.style.display="block";
        }

    
    question.style.color="red"
})
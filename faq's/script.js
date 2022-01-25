
// let answer=document.querySelector(".answer")
// let q1=document.querySelector(".q1")

// q1.addEventListener("click",()=>{
//     answer.classList.toggle("active")
    
    
// })

let answer=document.getElementsByClassName("answer")
 let q1=document.getElementsByClassName("q1")
 console.log(answer,q1)
 for(let i=0;i<q1.length;i++){
     answer[i].classList.remove("active")
     q1[i].addEventListener("click",()=>{
         answer[i].classList.toggle("active")
     })
    }
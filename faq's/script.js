
// let answer=document.querySelector(".answer")
// let q1=document.querySelector(".q1")

// q1.addEventListener("click",()=>{
//     answer.classList.toggle("active")
    
    
// })

let answer=document.getElementsByClassName("answer")
 let q1=document.getElementsByClassName("q1")
 console.log(answer,q1)
 
 for(let i=0;i<q1.length;i++){
     
     q1[i].addEventListener("click",()=>{
         answer[i].classList.toggle("active")
         var panel=this.nextElementSibling;
         if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
     })
    }
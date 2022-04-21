const likes=document.querySelector(".like")
const dislikes = document.querySelector(".dislike")
const count1=document.querySelector(".count1")
const count2=document.querySelector(".count2")
const commentSection=document.querySelector(".comment-section")
const comment=document.querySelector(".comment")
const submit = document.querySelector(".enter")
let likeCount=0
let dislikeCount=0

likes.addEventListener("click",()=>{
   // console.log("Liked")
   likeCount++
   count1.innerHTML=likeCount
})

dislikes.addEventListener("click",()=>{
    dislikeCount++
    count2.innerHTML=dislikeCount
 })
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    commentSection.innerHTML=comment.value
})
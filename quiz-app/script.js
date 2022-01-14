const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz=document.getElementById("quiz")
const questionel=document.getElementById("question")
const answerel=document.querySelectorAll(".answer")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const submitbtn=document.getElementById("submit")
let score=0
let currentquestion=0
function loadquiz(){
    deselectanswer()
    const currentquesdata=quizData[currentquestion]
    questionel.innerText=currentquesdata.question
    a_text.innerText=currentquesdata.a
    b_text.innerText=currentquesdata.b
    c_text.innerText=currentquesdata.c
    d_text.innerText=currentquesdata.d

}
function deselectanswer(){
    answerel.forEach((answerels)=>{
        answerels.checked=false
    })
}

function getselected(){
    let answer
    answerel.forEach((answerels)=>{
        if(answerels.checked){
            answer=answerels.id
        }
    })
    console.log(answer)
    return answer
}
loadquiz()

submitbtn.addEventListener("click",()=>{
    const answer=getselected()
    if(answer){
        if(answer===quizData[currentquestion].correct){
            score++;
        }
        currentquestion++
        if(currentquestion<quizData.length)
        loadquiz()
        else{
            quiz.innerHTML=`<h2>You answered ${score}/${quizData.length} questions correctly
            </h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})
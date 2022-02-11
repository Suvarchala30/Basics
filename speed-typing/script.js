const quotes=document.getElementById("quote")
const quoteinput=document.querySelector("#quoteInput");
const timer=document.querySelector("#timer")

quoteinput.addEventListener("input",()=>{
    //console.log(quoteinput.value)
    let correct=true
    const arrayQuote=document.querySelectorAll('span')
    const inputQuote=quoteinput.value.split('')
    //console.log(inputQuote)
    arrayQuote.forEach((characterSpan,index)=>{
        const chars=inputQuote[index]
        if(chars==null){
            characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct=false
        }
        else if(chars==characterSpan.innerText){
            characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.add('incorrect')
      characterSpan.classList.remove('correct')
      correct=false
        }
    })
if(correct)
getQuotes()
})
let apiQuotes=[]
getQuotes()
let startTime
async function getQuotes(){
    const quoteurl="https://type.fit/api/quotes"
    try{
    const quote=await fetch(quoteurl)
    apiQuotes=await quote.json()
    newQuote()
    }
    catch(error){
        console.log(error)
    }
    startTime=new Date()
    timer.innerText=0
    setInterval(()=>{

        timer.innerText=getTimerTime()
    },1000)
}
function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
    
  }
  
function newQuote(){
    const newquote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    
    const finalQuote=newquote.text
    quotes.innerText=''
    quoteinput.value=null
    
finalQuote.split('').forEach((character)=>{
    const charSpan=document.createElement('span')
    charSpan.innerText=character
    quotes.appendChild(charSpan)
})


}
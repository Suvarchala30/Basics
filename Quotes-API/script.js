const quoteContainer=document.getElementById("quote-container")
const quoteText=document.getElementById("quote")
const authorText=document.getElementById("author")
const newQuoteBtn=document.getElementById("new-quote")
const loader=document.getElementById("loader")
let apiQuotes=[]
getQuotes()
async function getQuotes(){
    showLoadingSpinner()
    const apiURL="https://type.fit/api/quotes"
    try{
    const response=await fetch(apiURL)
    apiQuotes=await response.json()
    newQuote()
    }
    catch(error){
        console.log(error)
    }
}
newQuoteBtn.addEventListener("click",newQuote)
function newQuote(){
    showLoadingSpinner()
    setTimeout(function(){
        const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
        quoteText.innerHTML=quote.text
        
        if(!quote.author){
            authorText.innerHTML="Undefined"
        }else{
                authorText.innerHTML=quote.author
            }
            if(quote.text.length>100){
                quoteText.classList.add("long-quote")
            }else{
                quoteText.classList.remove("long-quote")
            }
        removeLoadingSpinner()
    },200)


}
function showLoadingSpinner(){
    loader.hidden=false
    quoteContainer.hidden=true
}
function removeLoadingSpinner(){
    quoteContainer.hidden=false
    loader.hidden=true
}
const country1=document.getElementById("country1")
const country2=document.getElementById("country2")
const input1=document.getElementById("firstInputValue")
const input2=document.getElementById("secondInputValue")
const swap=document.getElementById("swap")
const rate=document.getElementById("rate")

country1.addEventListener("change",calculate)
country2.addEventListener("change",calculate)
input1.addEventListener("input",calculate)
input2.addEventListener("input",calculate)

async function calculate(){
    const apiURL="https://open.exchangerate-api.com/v6/latest"
    const response=await fetch(apiURL)
    const values=await response.json()
    //console.log(values)
    const currency1=country1.value
    const currency2=country2.value
    const exchangeRate=(values.rates[currency2]/values.rates[currency1]).toFixed(2)
    //console.log(exchangeRate)
    rate.innerHTML=`1 ${currency1} = ${exchangeRate} ${currency2}`
    input2.value=(input1.value * exchangeRate).toFixed(2)
}
calculate()

swap.addEventListener("click",(e)=>{
    e.preventDefault()
    const dummyCurrency=country1.value
    country1.value=country2.value
    country2.value=dummyCurrency
    calculate()
})
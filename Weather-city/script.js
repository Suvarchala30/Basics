const cityName=document.querySelector("#city-input")
let temperatureDegree=document.querySelector(".temperature-degree")
let locationTimezone=document.querySelector(".location-timezone")
let temperatureDescription=document.querySelector(".temperature-description")
let iconDisplay=document.querySelector("p")
let degreeSection=document.querySelector(".degree-sec")
let tempSpan=document.querySelector(".degree-sec span")
const location1=document.querySelector(".location")
const temperature1=document.querySelector(".temperature")
const submitBtn=document.querySelector("button")
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
location1.style.display="flex"
temperature1.style.display="flex"
const mykey='926f13b904025165c90f4e69fd80ea72'
//https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${mykey}&units=metric`
    
    fetch(api).then(response => response.json())
    .then(data => {
        console.log(data)
                const {temp} = data.main
                const {description} = data.weather[0]
                const {name}=data
                const {country}=data.sys
                const {icon}=data.weather[0]
                const icons = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`;
                temperatureDegree.innerHTML=temp
                temperatureDescription.innerHTML=description
                locationTimezone.innerHTML=`${name}/${country}`
                iconDisplay.innerHTML=`<img src='${icons}'>`

    const celsius=temp;
    console.log(celsius)
    const fahrenheit=(celsius*(9/5))+32;
    console.log(fahrenheit)
    
        degreeSection.addEventListener("click",()=>{
            if(tempSpan.innerHTML=="C"){
                tempSpan.innerHTML="F"
                temperatureDegree.innerHTML=fahrenheit
            }else{
                tempSpan.innerHTML="C"
                temperatureDegree.innerHTML=celsius
            }
        })

        tempSpan.innerHTML="C"
    })
    

    cityName.value=''
})
//(0°C × 9/5) + 32 = 32°F
let temperatureDegree=document.querySelector(".temperature-degree")
let locationTimezone=document.querySelector(".location-timezone")
let temperatureDescription=document.querySelector(".temperature-description")
let iconDisplay=document.querySelector("p")
let degreeSection=document.querySelector(".degree-sec")
let tempSpan=document.querySelector(".degree-sec span")
window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long=position.coords.longitude;
            lat=position.coords.latitude;
        
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=926f13b904025165c90f4e69fd80ea72`;
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

                const celsius=(temp-32)*(5/9);
                const fahrenheit=(celsius*1.8)+32;
                degreeSection.addEventListener("click",function(){
                    if(tempSpan.textContent==='F'){
                        tempSpan.textContent='C'

                    temperatureDegree.innerHTML=celsius
                    }else{
                        tempSpan.textContent='F'
                        temperatureDegree.innerHTML=fahrenheit
                    }

                })
            })

        })
       
    }

})
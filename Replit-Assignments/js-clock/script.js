const hourhand=document.querySelector(".hour-hand")
const minhand=document.querySelector(".min-hand")
const sechand=document.querySelector(".second-hand")

function settime(){
    let now=new Date()
    const hours=now.getHours()
    const mins=now.getMinutes()
    const secs=now.getSeconds()

    const secdeg=((secs/60)*360)+90
    sechand.style.transform=`rotate(${secdeg}deg)`

    const mindeg=(mins/60)*360+90 + (secs/60)*6
    minhand.style.transform=`rotate(${mindeg}deg)`

    const hrdeg=(hours/12)*360+90 + (mins/60)*30
    hourhand.style.transform=`rotate(${hrdeg}deg)`
}
setInterval(settime,10)
settime()

// const secondHand = document.querySelector('.second-hand')
// const minHand = document.querySelector('.min-hand')
// const hourHand = document.querySelector('.hour-hand')
// // const msHand = document.querySelector('.ms-hand')

// function setTime(){

//     let now = new Date()
//     const seconds = now.getSeconds()
//     const minutes = now.getMinutes()
//     const hours = now.getHours()
//     // const ms = now.getMilliseconds()

//     // console.log(minutes)

//     // const msDegrees = (ms/1000)*360 + 90
//     // msHand.style.transform = `rotate(${msDegrees}deg)`

//     const secDegrees = ((seconds/60)*360)+90
//     secondHand.style.transform = `rotate(${secDegrees}deg)`

//     const minDegrees = (minutes/60*360)+90 +(seconds/60)*6
//     minHand.style.transform = `rotate(${minDegrees}deg)`

//     const hourDegrees = (hours/12*360)+90 +(minutes/60)*30
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`
// }

// setInterval(setTime,10)
// setTime()
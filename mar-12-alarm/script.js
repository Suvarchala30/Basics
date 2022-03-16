const addAlarmBtn = document.getElementById("submit");
const alarmDay = document.getElementById("day");
const alarmTime = document.getElementById("time");
const alarms = document.getElementById("alarms");

addAlarmBtn.addEventListener("click",function (e){
    e.preventDefault()
    console.log(alarmTime.value,alarmDay.value)
    const hh=parseInt(alarmTime.value.split(":")[0])
    const mm=parseInt(alarmTime.value.split(":")[1])
    console.log(hh,mm)
})
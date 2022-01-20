/*
Synchronous - one expression executed after another (format)
Asynchronous - any expression execute at controlled/uncontrolled time(no format)
*/

console.log(1)
console.log(2)
//for(let i=0;i<1000000;i++)
 //    x=i

 setTimeout(()=>{
console.log(3)
 },5000)//will execute after 5 seconds

console.log(4)
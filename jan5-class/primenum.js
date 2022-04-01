// let arr=[4,8,6,7,52,112]
// let count=0;
// for(let i=0;i<arr.length;i++){
//     for(let j=2;j<arr[i];j++){
//         if(arr[i]%j == 0){
//             count++
//         }
//     }
// }
// if(count>0){
//     console.log("Not-Prime")
// }else{
//     console.log("prime")
// }
let count=0
const prime = (a)=>{
    if(a==1){
        console.log('Prime')
    }else{
    for(let i=2;i<a;i++){
        if(a%i==0){
            count++
        }
    }
    if(count>0){
        console.log("Non-prime")
    }else{
        console.log("Prime")
    }
}
   
}
prime(10)
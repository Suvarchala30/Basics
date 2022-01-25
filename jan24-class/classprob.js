
let bankbal=[30000,10000,50000,20000,40000]
//return an arry with updated bank balances in such a fashion : if first digit is even give 20% bonus, if odd give 35% bonus
// let arr=bankbal.map((value,index)=>{
//     return value
    
// })
// console.log(arr)
let arr=bankbal.toString()
console.log(arr)
let x=arr.split(",")
console.log(x)
let y=x.map((value,index)=>{
    return value[0]
})
console.log(y)
let z=y.filter((value)=>{
    return value%2==0
})
console.log(z)
let zz=y.filter((value)=>{
    return value%2!=0
})
console.log(zz)
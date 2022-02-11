let arr=[11,4,2,6,1,12,8,10]
let xyz=arr.filter((value)=>{
    return value%2==0
})

console.log(xyz)//Returns all even array

let flag=true
let z=[2,4,3,52,72,8]
z.forEach((e)=>{
    if(e%2!=0)
    flag=false
})

if(flag===true)
console.log(true)
else
console.log(false)//Returns true if entire array is even else false

let flags=false
let x=[1,3,5,7,90]
//Return yes if there exists atleast one even
let xy=x.forEach((value)=>{
    if(value%2==0)
    flags=true
    
})
if(flags===false)
console.log(false)
else
console.log(true)//Using for-each

//using filter
let cc=[3,2,5,7,9]
let yy=cc.filter((value)=>value%2===0)
console.log(yy.length)
if(yy.length!=0)
console.log(true)
else
console.log(false)
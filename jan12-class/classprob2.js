let x=[4,6,8,8,36]
//using .some from given list of elements find atleast one element which is prime them return true else false

let y=x.some((v)=>{
let flag=true
for(let i=2;i<v;i++){
    if(v%i==0){
        flag=false
    }
}
return flag
})
console.log(y)
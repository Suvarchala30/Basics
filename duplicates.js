const arr=[3,7,3,9,5,6,4,4,5]
const real=[]
const dupli = []
const differ = arr.forEach((element)=>{
    if(arr.indexOf(element)==arr.lastIndexOf(element)){
        real.push(element)
    }else{
        dupli.push(element)
    }
})

console.log(real)
console.log(dupli)
let arr=[2,52,14,52,8,132]
let areAllelementseven=arr.every((value)=>{
    return value%2===0
})
console.log(areAllelementseven?'TRUE':'FALSE')
//Every - Whether all elemsnts in anarray satisfys condition or not


let xyz=[1,41,3,5,7,812]
let ifthereiseven=xyz.some((value)=>{
    return value%2==0
})
console.log(ifthereiseven?'true':'false')
//Return yes if there exists atleast one even i.e., if atleast one element satisfies condition
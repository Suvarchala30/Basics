const shradha={
    name:'shradha',
    batch:'batch 11',
    techstack:'MERN'
}
console.log(shradha.batch)
console.log(shradha['name'])//must use '' if we use[]
console.log(...shradha.name)//this is acceptable
//console.log(...shradha)//returns error
console.log({...shradha})//retruns same obj with no change by using spread
const shradha2={
    ...shradha,
}
shradha2.batch="Batch 12"
console.log(shradha)
console.log(shradha2)
//with spread operator the original object value doesn't get overridden
const address={
    city:'mumbai',
    state:'maharastra',
    country:'India'
}
const shradha5={
    name:'shradha',
    batch:'batch 11',
    techstack:'MERN',
    address:{...address}
}
console.log(shradha5)

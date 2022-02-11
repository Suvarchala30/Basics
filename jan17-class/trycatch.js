console.log("Start of the code")
// let x='3+some'
// let z=eval(x)
// console.log(z)//prints only 1st statement and retruns error
try{
    let x='3+5'
    let z=eval(x)
    console.log(z)//stops just this block and returns remaining code output
    let a=10/0
    console.log(a)//infinity
}catch(error){
console.log(error)//prints the reason of error
}
console.log("End of the code")


console.log("First line of code")

try{

let a=10
//some code which is expecting positive value
if(a<0)
throw 'Invalid input'//returns this statement

}catch(error){
console.log(error)
}finally{
    console.log("I'll be executed always")//always prints this block
}
console.log("Last line of code")
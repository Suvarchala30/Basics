let value=7.8
console.log(Math.ceil(value))
let score=200
let x=JSON.stringify(score)
console.log(typeof(x))
function parser(){
    let ps=JSON.parse(x)
    console.log(typeof(ps))
}
parser();


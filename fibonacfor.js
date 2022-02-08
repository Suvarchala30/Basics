function fibonacci(num){
let x=0;
let y=1;
console.log(x)
console.log(y)
let z;
for(let i=2;i<=num;i++){
    z=x+y;
    x=y;
    y=z;
    console.log(z) //if we print here entire sequence is printed
}

console.log(z)
}
fibonacci(8)
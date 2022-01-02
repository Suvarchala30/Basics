function print(neem){
    console.log(neem)
    //print(num+1) recursion. This should not be runned because system will hang
}
print(7)

//factorial
function factorial(num){
    if(num===1)
    return 1
    return num*factorial(num-1)
}
console.log(factorial(1))

//fibonacci
function fibonacci(n){
    if(n<2)
        return n
    return fibonacci(n-1)+fibonacci(n-2)
}
for(let i=0;i<=7;i++){ //if we want the entire series use for loop 
console.log(fibonacci(i))
}
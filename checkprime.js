function isprime(num){
    let count=0;

if(num<=1){
    return false;
}
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++
    }
    if(count>2){
        return false
    }
    if(count===2){
        return true
    }
}
}
console.log(isprime(8))
function ispowerof2(num){
    if(num<=0)
    return false
    if((num & (num-1))===0){
        return true

    }else{
        return false
    }
}
console.log(ispowerof2(32))
console.log(ispowerof2(12))
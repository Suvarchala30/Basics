const add=(a,b)=>{
    return a+b
}

const division=(a,b)=>{
    if(typeof(a)!="number"||typeof(b)!="number"||b==0){
    return "Invalid"
    }
    return a/b
}

module.exports={add,division}
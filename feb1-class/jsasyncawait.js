async function abc(){
    return 'abc'
}
console.log(abc())//Returns a promise resolved object

async function def(){
    try{
        if(1<2){
            throw 'False value'
        }
    }catch(error){
        return error
    }
}
console.log(def())

async function x(){
    setTimeout(function(){
        return 'Resolved after 3 seconds'
    },3000)
}

async function display(){
    let resolvedmsg=await x()//await keyword always should be used within async
    return resolvedmsg
}
display().then(function(resolvedmsg){
    console.log(resolvedmsg)
}).catch(function(rejectedMsg){
    return rejectedMsg
})
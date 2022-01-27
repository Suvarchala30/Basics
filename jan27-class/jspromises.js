let promise=new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve('Resolving Promise1')

    },2000)
})
let promise2=new Promise(function (resolve,reject){
    setTimeout(function(){
    resolve('Resolving Promise2')
    },1000)
})
// promise.then(function(resolvedmsg){
//     console.log(resolvedmsg)
// })
// promise2.then(function(resolvedmsg){
//     console.log(resolvedmsg)
// })
promise.then(function(resolvedmsg){
    console.log(resolvedmsg)
    return promise2
}).then(function(resolvedmsg){
    console.log(resolvedmsg)
})//this is execute promise 2 only after promise 1 is executed

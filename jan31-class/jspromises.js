let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("I'm promise 1 and I was resolved after 3 seconds")
    },3000)
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("I'm promise 2 and I was rejected after 5 seconds")
    },5000)
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("I'm promise 3 and I was resolved after 7 seconds")
    },7000)
})
Promise.all([promise1,promise2,promise3]).then(function(resolvedmsg){
    console.log(resolvedmsg)
}).catch(function(rejectedmsg){
    console.log(rejectedmsg)
})
//if any one is rejected .all function returns catch statement only
//if all are rejected .all returns 1st rejected promise

Promise.any([promise1,promise2,promise3]).then(function(resolvedmsg){
    console.log('This is any output')
    console.log(resolvedmsg)
}).catch(function(rejectedmsg){
    console.log(rejectedmsg)
})
//if any one is rejected .any returns 1st resolved .then block
//if all are rejected .any returns a msg as All promises were rejected
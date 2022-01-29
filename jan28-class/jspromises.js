let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I'm promise 1 and I was resolved after 3 seconds")
    },3000)
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I'm promise 2 and I was resolved after 5 seconds")
    },5000)
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I'm promise 3 and I was resolved after 7 seconds")
    },7000)
})
//Promise.all -> Resolves all the promises at one shot;.then works when all promises are resolved
Promise.all([promise1,promise2,promise3]).then((resolvedmsg)=>{
   console.log(resolvedmsg)
})
//Promises.any -> Consolidates all promises ; .then works right after even one promise is resolved, faster settimeout is only returned test by commenting above .all method
Promise.any([promise1,promise2,promise3]).then((resolvedmsg)=>{
    console.log(resolvedmsg)
})
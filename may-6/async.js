let promise1=new Promise((resolve,reject)=>{
    reject("This is resolved")
    
})
promise1.then((resolvedmessage)=>{
    console.log(resolvedmessage)
}).catch((rejectedmsg)=>{
    console.log(rejectedmsg)
})
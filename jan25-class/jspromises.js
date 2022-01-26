/*
Promise is to handle asynchronous code
Promises has 4 states:
Pending
resolves
rejected
fulfilled

Way1: --- pending ----resolved----fulfilled
Way2: --- pending ----rejected ----fulfilled
*/
let x=15
let y=25
let promise= new Promise(function(resolve, reject){
    if(x==y)
    resolve('Both the values are same')
    else if(x>y)
    resolve('The value of x is greater than y')
    else
    reject('The value of x is lesser than y')
})
// promise.then(function(){
//     console.log('This is resolved')
// })


/*
Promise
.then - First callback to handle resolved scenario
- second callback to handle rejected scenario

you can resolve/reject with a message as well
*/
promise.then(function(resolvedmsg){
    console.log('This was resolved, with the message -', resolvedmsg)
}, function(rejectmsg){
    console.log('This promise was rejected, with the message',rejectmsg)
})

//Both the above and below methods can be used

promise.then(function(resolvedmsg){
    console.log('This was resolved, with the message -', resolvedmsg)
})
.catch(function(rejectmsg){
    console.log('This promise was rejected, with the message',rejectmsg)
}).finally(function(){
    console.log('This will be executed always')
})


console.log('Start of the code')

let promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Finally this was resolved after 5 sec')
    },5000)
})
console.log(promise2)
promise2.then(function(resolvedmsg){
    console.log('This was resolved, with the message -', resolvedmsg)
    console.log(promise2)
}, function(rejectmsg){
    console.log('This promise was rejected, with the message',rejectmsg)
})

console.log('End of the code')



const fetchinfo=function (){
    return new Promise(function(resolve,reject){
        console.log('Fetching information')
        setTimeout(function(){
            resolve('It took 5 secs')
        },5000)
    })
}

fetchinfo().then(function(resolvedmsg){
    console.log('This was resolved, with the message -', resolvedmsg)
}, function(rejectmsg){
    console.log('This promise was rejected, with the message',rejectmsg)
})
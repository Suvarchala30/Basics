async function abc(){

    console.log('abc() function strated')
    await new Promise(function (resolve,reject){
        
    setTimeout(function(){
        resolve('Resolved after 3 seconds')
    },3000)
})
console.log('There was a promise which was resolved in 3s')
return '[Promise returnd from abc()]'
}


async function display(){
    console.log('Display function strated')
    let resolvedmsg=await abc()//await keyword always should be used within async
    console.log(resolvedmsg)
    console.log('Display function ended')
}
display()
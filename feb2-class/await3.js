let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved after 3s')
    },3000)
})



async function display1(){

    console.log('Display function started')
    try{
        let resolvedmsg=await promise
        return resolvedmsg
    }
    catch(rejectmsg){
        console.log('Promise2 rejected with message - ',rejectmsg)
    }
}
console.log(display1())//returns promise pending so we use below method
let resolvedmsg=display1()
setTimeout(function(){
    console.log('From main thread',resolvedmsg)
},3000)
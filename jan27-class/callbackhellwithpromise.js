// const executeOrder =function () {
//     return new Promise(function (resolve,reject){
        
//     console.log('Order placed')
//     setTimeout(()=>{
//         console.log('Order received')
//         console.log('Chef started preparing')        
//         setTimeout(()=>{
//             console.log('Pizza sauce added')
//             setTimeout(()=>{
//                 console.log('First layer of cheese added')
//                 setTimeout(()=>{
//                     console.log('Toppings added')
//                     setTimeout(()=>{
//                         console.log('Final layer of cheese added')
//                         resolve()
                        
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
    
// })
// }
const executeOrder=()=>{
    return new Promise((resolve,reject)=>{
        console.log('Order placed')
        setTimeout(()=>{
            console.log('Order has been received')
            console.log('Chef started preparing') 
            resolve()//this is must in promise
        },1000)
    })
}
const addPizzaSauce=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Add pizza sauce')
            resolve()//this is must in promise
        },1000)
    })
}
const addToppings=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Add toppings')
            resolve()//this is must in promise
        },1000)
    })
}
const addFInalCheeseLayer=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Add final layer of cheese')
            resolve()//this is must in promise
        },1000)
    })
}
const pizzabaked=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Pizza baked')
            resolve()
            
        },1000)
    })
}//same process can be done for all blocks in the main block
const addoreganoandpack=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Oregano added and packed')
            resolve()//this is must in promise
        },1000)
    })
}
executeOrder().then(addPizzaSauce).then(addToppings).then(addFInalCheeseLayer).then(pizzabaked).then(addoreganoandpack).then(function (){
    console.log('The order is ready and handed over to zomato guy')
})
//callback hell with promises
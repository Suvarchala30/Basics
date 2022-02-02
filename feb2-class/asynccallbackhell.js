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
const bakePizza=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Pizza baked')
            resolve()//this is must in promise
        },1000)
    })
}

const addoreganoandpack=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Oregano added and packed')
            resolve()//this is must in promise
        },1000)
    })
}

const processOrder=async() => {
    await executeOrder()
    await addPizzaSauce()
    await addToppings()
    await addFInalCheeseLayer()
    await bakePizza()
    await addoreganoandpack()
    console.log('The order is ready and handed over to zomato guy')

}
processOrder()
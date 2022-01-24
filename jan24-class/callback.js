//callback hell
const f1 =(callback) => {
    console.log('Order placed')
    setTimeout(()=>{
        console.log('Order received')
        console.log('Chef started preparing')
        
        setTimeout(()=>{
            console.log('Pizza sauce added')
            setTimeout(()=>{
                console.log('First layer of cheese added')
                setTimeout(()=>{
                    console.log('Toppings added')
                    setTimeout(()=>{
                        console.log('Final layer of cheese added')
                        setTimeout(()=>{
                            console.log('Pizza baked')
                            setTimeout(()=>{
                                console.log('Oregano added and packed')
                                callback()
                            },4000)
                            //callback() 6th step
                        },8000)
                        //callback() 5th step
                    },2000)
                    //callback() 4th step
                },4000)
                //callback() 3rd step
            },3000)
            //callback()//2nd step
        },5000)
        //1st-step callback() is here
    },2000)
    
}

f1(()=>{
    console.log('The order is ready and handed over to zomato guy')
})

//callback should be added for the lastly created settimeout function after console log
let inputArray = [
    {name: 'Amber', batch: 'Batch 12', likesIceCream: false},
    {name: 'Pratik', batch: 'Batch 12', likesIceCream: true},
    {name: 'Charan', batch: 'Batch 11', likesIceCream: false},
    {name: 'Dhanashree', batch: 'Batch 11', likesIceCream: true},
    {name: 'Anirban', batch: 'Batch 10', likesIceCream: false}
  ]

  let x=inputArray.filter((value)=>{
      return value.likesIceCream && value.batch==="Batch 11"
      
  })
  console.log(x)

 let y=x.map((value)=>{
      return value.name
 })
  console.log(y)
 
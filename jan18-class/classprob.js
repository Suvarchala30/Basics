let inputarr=[
    {name:'Amber',batch:'Batch 12',likesicecream:false},
    {name:'Pratik',batch:'Batch 12',likesicecream: true},
    {name:'Charan',batch:'Batch 11',likesicecream:false},
    {name:'Dhanasree',batch:'Batch 12',likesicecream: true},
    {name:'Anirban',batch:'Batch 10',likesicecream:false},
]
let studentwholikeicecream=inputarr.filter(function (value){
    
    return value.likesicecream
})
console.log(studentwholikeicecream)

let saurabh={
    fn:"saurabh",
    sn:"rajput",
    noofhrs:2,
    noofhtml:3
}
//bind method
 function fullname(){
     console.log(this.fn+" "+this.sn)
 }

let fullnamwiththiscope=fullname.bind(saurabh)//newly created modified function
//bind - used to link a block with anothet block with 'this' keyword

fullnamwiththiscope()//This call is mandatory in bind

//call method - Arguments separated by commas

function fullname2(city,state){
    console.log(this.fn+" "+this.sn + ' is from '+ city +' , '+state)
}


fullname2.call(saurabh,'Mumbai','maharastra');//call and apply do not need to call since they are invoked at the time of usage

//only diff bw bind and call is bind doesn't invoke itself and call does

//APPLY METHOD - Arguments specifies in array

function fullname3(city,state,a,b,c,d,e){
    console.log(this.fn+" "+this.sn + ' is from '+ city +' , '+state,a,b,c,d,e)
}

fullname3.apply(saurabh,['Mumbai','Maharastra',1,2,3,4,5])
//factorial with for loop
function factfor(form){
    if(form==0){
        console.log("0 factorial is 1")
    }else if(form<0){
        console.log("Factorial does not exist for negative numbers")
    }else{
    let x=1;
        for(let i=1;i<=form;i++){
            x=x*i;
        }
    
        console.log(x)
    }
}
factfor(7)
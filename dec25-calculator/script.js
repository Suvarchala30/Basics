let displayxyz=document.getElementById("display");
let buttonxyz=document.getElementsByClassName("btn");
let buttonsxyz=Number(document.getElementsByClassName("btn0"))

function isOpxyz(opxyz){
    if(opxyz==="+" || opxyz==='-' || opxyz==='/' || opxyz==='*')
        return true
    return false
}

function clickxyz(clickedxyz){
    if(displayxyz.innerText===""){
        if(clickedxyz!='0'){
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }
    }else{

        var innertextxyz=displayxyz.innerText;
        var lenxyz=innertextxyz.length;
        var lastcharxyz=innertextxyz[lenxyz-1]
        
        if(isOpxyz(lastcharxyz)===true){
            if(clickedxyz!='0'){
                if(isOpxyz(clickedxyz)===true){
                    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
                }
                displayxyz.innerText = displayxyz.innerText+clickedxyz

            }
        }else{
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }

            }
    }
 

function clearxyz(){
    displayxyz.innerText="";
}

function backxyz(){
    displayxyz.innerText=displayxyz.innerText.slice(0,-1)
}

function submitxyz(){
    try{
    displayxyz.innerText=eval(displayxyz.innerText)
    }catch(err){
        displayxyz.innerText="Error"
    }
}


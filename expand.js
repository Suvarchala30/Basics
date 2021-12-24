//1st five lines are common for both the solutions and for 1st solution we need to give these function names in html onclick
const panelxyz1=document.getElementById("panel-1")
const panelxyz2=document.getElementById("panel-2") 
const panelxyz3=document.getElementById("panel-3")
const panelxyz4=document.getElementById("panel-4")
const panelxyz5=document.getElementById("panel-5")

/*function selectpanel2(){
    panelxyz1.classList.remove("active")
    panelxyz3.classList.remove("active")
    panelxyz4.classList.remove("active")
    panelxyz5.classList.remove("active")
panelxyz2.classList.add("active")
}

function selectpanel1(){
    panelxyz2.classList.remove("active")
    panelxyz3.classList.remove("active")
    panelxyz4.classList.remove("active")
    panelxyz5.classList.remove("active")
panelxyz1.classList.add("active")
}
function selectpanel3(){
    panelxyz1.classList.remove("active")
    panelxyz2.classList.remove("active")
    panelxyz4.classList.remove("active")
    panelxyz5.classList.remove("active")
panelxyz3.classList.add("active")
}
function selectpanel4(){
    panelxyz1.classList.remove("active")
    panelxyz3.classList.remove("active")
    panelxyz2.classList.remove("active")
    panelxyz5.classList.remove("active")
panelxyz4.classList.add("active")
}
function selectpanel5(){
    panelxyz1.classList.remove("active")
    panelxyz3.classList.remove("active")
    panelxyz4.classList.remove("active")
    panelxyz2.classList.remove("active")
panelxyz5.classList.add("active")
}*/

function removeActive(){
    panelxyz1.classList.remove("active")
    panelxyz3.classList.remove("active")
    panelxyz4.classList.remove("active")
    panelxyz2.classList.remove("active")
    panelxyz5.classList.remove("active")
}

function selectnoxyz(panelnum){
    removeActive()

    switch(panelnum){
        case 1:
            panelxyz1.classList.add("active")
            break;
        case 2:
            panelxyz2.classList.add("active")
            break;
        case 3:
            panelxyz3.classList.add("active")
                break;
        case 4:
                panelxyz4.classList.add("active")
                    break;
        case 5:
                panelxyz5.classList.add("active")
                        break;
    }
}
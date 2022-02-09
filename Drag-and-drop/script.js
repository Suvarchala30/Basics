let listItems=document.querySelectorAll(".list-item")
let lists=document.querySelectorAll(".list")

let draggedItem=null;
for(let i=0;i<listItems.length;i++){
    const items=listItems[i]

    items.addEventListener("dragstart",function(){
        setTimeout(()=>{
            draggedItem=items;
            items.style.display="none"
        },0)
    })
    items.addEventListener("dragend",()=>{
        setTimeout(()=>{
            draggedItem.style.display="block"
            draggedItem=null
        },0)
        
    })

    for(let j=0;j<lists.length;j++){
        const listBlock=lists[j]

        listBlock.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        listBlock.addEventListener("dragenter",(e)=>{
            e.preventDefault()
            listBlock.style.backgroundColor="rgba(0,0,0,0.2)"
        })
        listBlock.addEventListener("dragleave",()=>{
            listBlock.style.backgroundColor="rgba(0,0,0,0.1)"
        })
        listBlock.addEventListener("drop",(e)=>{
            listBlock.append(draggedItem)
            listBlock.style.backgroundColor="rgba(0,0,0,0.1)"
        })
    }
}
const title=document.querySelector("#title")
const author=document.querySelector("#author")
const isbn=document.querySelector("#isbn")
const submitBtn=document.querySelector(".btn")
const booklist=document.querySelector(".result-book")

const items=JSON.parse(localStorage.getItem("listItems"))

console.log(items)
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    updateLS();
})
function updateLS(){
    
    if(title.value==""&&author.value==""&&isbn.value==""){
        alert("Add the details of book")
    }else{
        const body=document.createElement("tr")

        const titleEl=document.createElement("th")
        titleEl.innerHTML=title.value
        body.appendChild(titleEl)
        const authorEl=document.createElement("th")
        authorEl.innerHTML=author.value
        body.appendChild(authorEl)
        const isbnEl=document.createElement("th")
        isbnEl.innerHTML=isbn.value
        const deleteEl=document.createElement("th")
        deleteEl.innerHTML=`<a href="#" class="btn btn-danger btn-sm delete">X</a>`
        body.appendChild(isbnEl)
        body.appendChild(deleteEl)

        booklist.appendChild(body)
        const itemELs=document.querySelectorAll("tr")
        const items=[]
        itemELs.forEach(iteml=>{
            items.push({
                text:iteml.innerHTML
            })
        })
        // const items={
        //     title:titleEl.innerHTML,
        //     author:authorEl.innerHTML,
        //     isbn:isbnEl.innerHTML,
        //     delete:deleteEl.innerHTML
        // }
        localStorage.setItem("listItems",JSON.stringify(items))
        deleteEl.addEventListener("click",(e)=>{
            e.preventDefault()
            body.innerText=''
            localStorage.removeItem("listItems")
        })
        title.value=''
    author.value=''
    isbn.value=''
    }
}

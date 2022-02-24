const title=document.querySelector("#title")
const author=document.querySelector("#author")
const isbn=document.querySelector("#isbn")
const submitBtn=document.querySelector(".btn")
const booklist=document.querySelector(".result-book")


// submitBtn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     updateLS();
// })
// function updateLS(){
    
//     if(title.value==""&&author.value==""&&isbn.value==""){
//         alert("Add the details of book")
//     }else{
//         const body=document.createElement("tr")

//         const titleEl=document.createElement("th")
//         titleEl.innerHTML=title.value
//         body.appendChild(titleEl)
//         const authorEl=document.createElement("th")
//         authorEl.innerHTML=author.value
//         body.appendChild(authorEl)
//         const isbnEl=document.createElement("th")
//         isbnEl.innerHTML=isbn.value
//         const deleteEl=document.createElement("th")
//         deleteEl.innerHTML=`<a href="#" class="btn btn-danger btn-sm delete">X</a>`
//         body.appendChild(isbnEl)
//         body.appendChild(deleteEl)

//         booklist.appendChild(body)
//         const itemELs=document.querySelectorAll("tr")
//         const items=[]
//         itemELs.forEach(iteml=>{
//             items.push({
//                 text:iteml.innerHTML
//             })
//         })
//         deleteEl.addEventListener("click",(e)=>{
//             e.preventDefault()
//             body.innerText=''
//             localStorage.removeItem("items")
//         })
//         title.value=''
//     author.value=''
//     isbn.value=''
//     }
// }


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(title.value==""&&author.value==""&&isbn.value==""){
              alert("Add the details of book")
            }else{

    const newBook=addBook(
        title.value,
        author.value,
        isbn.value
    )
createBookElement(newBook)
    title.value=''
    author.value=''
    isbn.value=''
            }
})

const items=JSON.parse(localStorage.getItem("items")) || [];

const addBook=( title,author,isbn ) =>{
    items.push({
        title,
        author,
        isbn
    })
    localStorage.setItem("items",JSON.stringify(items))
    return { title,author,isbn }
}
const createBookElement=({ title,author,isbn })=>{
    const bookrow=document.createElement("tr")
    const titleEl=document.createElement("td")
    const authorEl=document.createElement("td")
    const isbnEl=document.createElement("td")

    titleEl.innerHTML=title
    authorEl.innerHTML=author
    isbnEl.innerHTML=isbn

               bookrow.append(titleEl,authorEl,isbnEl)
               booklist.appendChild(bookrow)
}
items.forEach(createBookElement)

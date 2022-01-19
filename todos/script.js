const form=document.getElementById("todos")
const inputel=document.getElementById("todo")
const todosul=document.getElementById("olist")

const todos=JSON.parse(localStorage.getItem("olist"))
if(todos){
    todos.forEach(todo=>addTodo(todo))
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addTodo()
})
function addTodo(todo){
    let todotext=inputel.value

    if(todo){
        todotext=todo.text
    }
    if(todotext){

        let todoel=document.createElement("li")
        todoel.innerText=todotext

        todoel.addEventListener("click",(e)=>{
            todoel.classList.toggle("completed")
            updateLS()
        })
        todoel.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            todoel.remove()
            updateLS()
        })

    todosul.appendChild(todoel)
    inputel.value=''
    updateLS()

    }
}
function updateLS(){
    const todoels=document.querySelectorAll(".li")
    const todos = []
    todoels.forEach(todoel=>{
        todos.push({
            text:todoel.innerText,
            isCompleted:todoel.classList.contains("completed")
        })
    })
    localStorage.setItem("todos",JSON.stringify(todos))

}
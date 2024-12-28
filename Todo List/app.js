let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage,cookies
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let Todo = document.createElement('p');
    Todo.innerText = todo;
    todoList.appendChild(Todo)
    
    Todo.addEventListener('click',()=>{
        Todo.style.textDecoration = 'line-through'
        remove(todo)
    })
    Todo.addEventListener('dblclick',()=>{
        todoList.removeChild(Todo)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}

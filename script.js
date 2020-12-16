//selector
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector('.filter-todo')
//event listener
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('input', filterTodo)

//functions

function addTodo(event) {
    //prevent form from submit
    event.preventDefault();
    if (todoInput.value !== "") {

        //todo div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add("todo")
    
        //create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo)
    
        //check mark button
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn")
        todoDiv.appendChild(completedButton)
    
        //trash button
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn")
        todoDiv.appendChild(trashButton)
    
        //append to list
        todoList.appendChild(todoDiv)
    
        //clear todo input value
        todoInput.value = "";
        todoInput.focus()

    }
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }

    // check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}



function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {


        //check for undefined values and skips then and only apply the switch statement on nodes with properties 
      if (todo.classList !== undefined) {
        switch (e.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          default:
            break;
        }
      }
      return;
    });
}
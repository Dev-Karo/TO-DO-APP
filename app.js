// Selecting DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Add Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo); // 'change' works better with dropdowns

// Function to Add a New Todo Item
function addTodo(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Create Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create Todo List Item (li)
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value; // Get input value
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Add Checkmark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>'; // Font Awesome check icon
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Add Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // Font Awesome trash icon
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append the todoDiv to the todoList
  todoList.appendChild(todoDiv);

  // Clear Input Field
  todoInput.value = "";
}

// Function to Handle Delete and Complete
function deleteCheck(e) {
  const item = e.target;

  // Handle Clicks on Trash Button
  if (
    item.classList.contains("trash-btn") ||
    item.classList.contains("fa-trash")
  ) {
    const todo = item.closest(".todo");
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Handle Clicks on Complete Button
  if (
    item.classList.contains("complete-btn") ||
    item.classList.contains("fa-check")
  ) {
    const todo = item.closest(".todo");
    todo.classList.toggle("completed");
  }
}

// Function to Filter Todos Based on Status
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
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
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

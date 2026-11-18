const form = document.getElementById("todo-form"); 
const input = document.getElementById("todo-input"); 
const list = document.getElementById("todo-list"); 
form.addEventListener("submit", function(event) { 
 event.preventDefault(); 
 const task = input.value.trim(); 
 if (!task) return; 
 const item = document.createElement("li"); 
 item.className = "list-group-item d-flex align-items-center gap-2"; 
 const checkbox = document.createElement("input"); 
 checkbox.type = "checkbox"; 
 checkbox.className = "form-check-input"; 
 const taskText = document.createElement("span"); 
 taskText.textContent = task; 
 taskText.className = "flex-grow-1"; 
 checkbox.addEventListener("change", function() { 
 taskText.classList.toggle("text-decoration-line-through"); 
 }); 
 const deleteButton = document.createElement("button"); 
 deleteButton.textContent = "Delete"; 
 deleteButton.className = "btn btn-danger btn-sm"; 
 deleteButton.type = "button"; 
 deleteButton.addEventListener("click", function() { 
 item.remove(); 
 });
// v7 requirements
// there should be a "Display todos" button and a "Toggle all" button
// clicking "Display todos" should run todoList.displayTodos
// clicking "Toggle all" should run todoList.toggleAll

// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);



// 2. We want to run displayTodos method, when someone clicks the 
// display todos button
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
})


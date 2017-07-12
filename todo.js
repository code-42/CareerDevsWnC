var todos = ['item 1', 'item 2', 'item 3']

// it should have a function to display todos
function displayTodos(){
    console.log('My todos:', todos);
}

// it should have a function to add todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

// it should have a function to change todos
function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

// it should have a function to delete todos
function deleteTodo(position){
    todos.splice(position,1);
    displayTodos();
}


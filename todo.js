<<<<<<< HEAD
// version 3 - objects
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
};
=======
// version 2 - functions
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


>>>>>>> v2

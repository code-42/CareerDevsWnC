/*
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
*/

/*
// version 3 - moved the todo functions onto the object
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
*/

// version 4 - booleans
// todoList.toggleCompleted should flip the completed property
// add a new method called toggleCompleted
var todoList = {
  todos: [],
  displayTodos: function(){
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
// change parameter newValue to todoText
  changeTodo: function(position, todoText){
// change this.todos[position] = newValue; to a property on the object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
// add a new method called toggleCompleted
// use ! to get the opposite of a boolean value
  toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
  }
};


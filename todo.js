// version 1 - arrays
var todos = ['item 1', 'item 2', 'item 3']

// it should have a way to display todos
console.log(todos);
console.log(todos[0]);
console.log(todos[1]);
console.log(todos[2]);


// it should have a way to add todos
console.log("adding item 4 and item 5...")
todos.push('item 4');
console.log(todos);
todos.push('item 5');
console.log(todos);

// it should have a way to change todos
console.log("changing item 1...")
todos[0] = 'item 1 updated';
console.log(todos);

// it should have a way to delete todos
console.log("deleting item 1...")
todos.splice(0,1);
console.log(todos);
console.log("deleting item 5...")
todos.splice(3,1);
console.log(todos);

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> v4-booleans
=======
>>>>>>> v1

// version 4
// change the addTodo method so it adds objects instead of text to the todos array
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
>>>>>>> 91a10ceb449111cdf97b5c13ee0a9ba69a4bfe84

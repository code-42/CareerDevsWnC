// change the addTodo method so it adds objects instead of text to the todo array

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

// run it
<<<<<<< HEAD
todoList.addTodo('this is an object');
VM2407 script.js:1 My Todos 
[Object]
0
:
Object
completed
:
false
todoText
:
"this is an object"
__proto__
:
Object
length
:
1
__proto__
:
Array(0)
=======
// todoList.addTodo('this is an object');
// // VM2407 script.js:1 My Todos 
// [Object]
// 0
// 
// Object
// completed
// :
// false
// todoText
// :
// "this is an object"
// __proto__
// :
// Object
// length
// :
// 1
// __proto__
// :
// Array(0)
>>>>>>> v5-loopsoflogic


// todoList.changeTodo should change the todoText property
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
  }
};

// run it
<<<<<<< HEAD
todoList.addTodo('first try');
VM2407 script.js:1 My Todos 
[Object]
0
:
Object
completed
:
false
todoText
:
"first try"
__proto__
:
Object
length
:
1
__proto__
:
Array(0)
undefined
todoList.changeTodo(0,'second try');
VM2407 script.js:1 My Todos 
[Object]
0
:
Object
completed
:
false
todoText
:
"second try"
__proto__
:
Object
length
:
1
__proto__
:
Array(0)
=======
// todoList.addTodo('first try');
// VM2407 script.js:1 My Todos 
// [Object]
// 0
// :
// Object
// completed
// :
// false
// todoText
// :
// "first try"
// __proto__
// :
// Object
// length
// :
// 1
// __proto__
// :
// Array(0)
// undefined
// todoList.changeTodo(0,'second try');
// VM2407 script.js:1 My Todos 
// [Object]
// 0
// :
// Object
// completed
// :
// false
// todoText
// :
// "second try"
// __proto__
// :
// Object
// length
// :
// 1
// __proto__
// :
// Array(0)
>>>>>>> v5-loopsoflogic


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



// run it
<<<<<<< HEAD
todoList.addTodo('boolean testing');
VM2407 script.js:1 My Todos 
[Object]
0
:
Object
completed
:
false
todoText
:
"boolean testing"
__proto__
:
Object
length
:
1
__proto__
:
Array(0)
undefined
todoList.toggleCompleted(0);
VM2407 script.js:1 My Todos 
[Object]
0
:
Object
completed
:
true
todoText
:
"boolean testing"
__proto__
:
Object
length
:
1
__proto__
:
Array(0)
=======
// todoList.addTodo('boolean testing');
// VM2407 script.js:1 My Todos 
// [Object]
// 0
// :
// Object
// completed
// :
// false
// todoText
// :
// "boolean testing"
// __proto__
// :
// Object
// length
// :
// 1
// __proto__
// :
// Array(0)
// undefined
// todoList.toggleCompleted(0);
// VM2407 script.js:1 My Todos 
// [Object]
// 0
// :
// Object
// completed
// :
// true
// todoText
// :
// "boolean testing"
// __proto__
// :
// Object
// length
// :
// 1
// __proto__
// :
// Array(0)
>>>>>>> v5-loopsoflogic

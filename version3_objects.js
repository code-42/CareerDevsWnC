var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
}

myComputer
Object {operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}
myComputer.operatingSystem
"mac"
myComputer.screenSize
"15 inches"
myComputer.pu
undefined
myComputer.purchaseYear
2011

var gordon = {
    name: 'Gordon',
    sayName: function(){
		console.log(this);
    }
}
undefined
gordon.sayName();
VM484:4 Object {name: "Gordon", sayName: function}name: "Gordon"sayName: function ()__proto__: Object
undefined
var gordon = {
    name: 'Gordon',
    sayName: function(){
		console.log(this.name);
    }
}
undefined
gordon.sayName();
VM528:4 Gordon

// video @ 4:29 "sayName is a method on the gordon object"

// commit 
// it should store the todos array on an object
var todoList = {
  todos: ['item 1', 'item 2', 'item 3']
};


// it should have a function to display todos
// moved the displayTodos() function onto the object
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My Todos', this.todos);
  }
};

todoList.displayTodos();
VM2407 script.js:1 My Todos (3) ["item 1", "item 2", "item 3"]
undefined

// it should have an addTodo method
// moved the addTodos() function onto the object
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  }
};

// run it
todoList.addTodo('plunker');
VM2407 script.js:1 My Todos (4) ["item 1", "item 2", "item 3", "plunker"]


// it should have a changeTodo method
// moved the changeTodos() function onto the object
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
  }
};

// run it
todoList.changeTodo(0,'first');
VM2407 script.js:1 My Todos (3) ["first", "item 2", "item 3"]
undefined

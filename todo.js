<<<<<<< HEAD
<<<<<<< HEAD
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
=======
var todos = ['item 1', 'item 2', 'item 3'];


// version 4
// change the addTodo method so it adds objects instead of text to the todos array
=======
var todos = ['item 1', 'item 2', 'item 3'];

// v5 requirements
// .displayTodos should show .todoText
// change the addTodo method so it adds objects instead of text to the todos array
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed
>>>>>>> v5-loopsoflogic
var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
        console.log('Your todo list is empty');
    } else {
        console.log('My Todos:');
        for(var i = 0; i < this.todos.length; i++){
            if(this.todos[i].completed === true){
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }
        }
    }
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
<<<<<<< HEAD
=======
  },
  toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
>>>>>>> v5-loopsoflogic
  }
};

todoList.addTodo("add first todo");
todoList.addTodo("add 2nd todo");
todoList.addTodo("add third todo");
todoList.changeTodo(1, "change second todo");
todoList.addTodo("add thth todo");
todoList.changeTodo(3, "add forrth todo");
>>>>>>> v4-booleans

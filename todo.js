// v7 requirements
// there should be a "Display todos" button and a "Toggle all" button
// clicking "Display todos" should run todoList.displayTodos
// clicking "Toggle all" should run todoList.toggleAll

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
  },
  toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
  },
  toggleAll: function(){
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      
      // get the number of completed todos
      for(var i = 0; i < totalTodos; i++){
        if(this.todos[i].completed === true){
            completedTodos++;
        }
      }
      // case 1: if everything is true, make everything false
      if(completedTodos === totalTodos){
        //   console.log("2.totalTodos == ", totalTodos);
          for(var i = 0; i < totalTodos; i++){
            //   console.log("3.totalTodos == ", totalTodos);
              this.todos[i].completed = false;
          }
      } else {
          // case 2: otherwise, make everything true
        for(var i = 0; i < totalTodos; i++){
            this.todos[i].completed = true;  
        }
      }
      this.displayTodos();
  }
};

// version 7
// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// 2. We want to run displayTodos method, when someone clicks the 
// display todos button
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
})

// add event listener for toggleAllButton
toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
})


todoList.addTodo("add first todo");
todoList.addTodo("add 2nd todo");
todoList.addTodo("add third todo");
// todoList.changeTodo(1, "change second todo");
// todoList.addTodo("add thth todo");
// todoList.changeTodo(3, "add forrth todo");
todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
todoList.toggleAll();
todoList.toggleAll();
todoList.toggleAll();

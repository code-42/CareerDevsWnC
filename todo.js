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


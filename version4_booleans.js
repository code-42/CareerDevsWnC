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





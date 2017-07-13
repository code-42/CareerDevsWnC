var todos = ['item 1', 'item 2', 'item 3'];

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

// run version 4
// todoList.addTodo("add first todo");
// todoList.addTodo("add 2nd todo");
// todoList.addTodo("add third todo");
// todoList.changeTodo(1, "change second todo");
// todoList.addTodo("add thth todo");
// todoList.changeTodo(3, "add forrth todo");

// v10 requirements

var todoList = {
  todos: [],
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },  
  deleteTodo: function(position){
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
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
  }
};

// version 8 - our first refactoring
var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
    toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
}

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if(todo.completed === true){
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);  
    }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
}

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
view.displayTodos();

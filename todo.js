// v9 - escape from the console
// v9 requirements:
// there should be an li element for every todo
// each li element should contain .todoText
// each li element should show .completed

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

// version 8 - our first refactoring
var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
    toggleAll: function(){
    todoList.toggleAll();
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
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);  
    }
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

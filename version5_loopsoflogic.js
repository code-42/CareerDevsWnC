// version 5 - for loops
// i = 0                   // initialization
// Say 'hey' if i < 3      // condition
// increase i by 1         // final-expression

// for (initializatin, condition, final-expression){

for (var i=0; i < 3; i++){
    console.log("hey");
}

// code42:~/workspace/CareerDevsWnC (v5-loopsoflogic) $ node version5_loopsoflogic.js 
// hey
// hey
// hey
// code42:~/workspace/CareerDevsWnC (v5-loopsoflogic) $ 

// video 2 - looping over arrays
var testArray = ['item 1','item 2','item 3'];

for (var i=0; i < testArray.length; i++){
    // console.log(i);
    console.log(testArray[i]);
}

// v5 requirements
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

// .displayTodos should show .todoText
// change the addTodo method so it adds objects instead of text to the todos array
// .displayTodos should tell you if .todos is empty
var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
        console.log('Your todo list is empty');
    } else {
        console.log('My Todos:');
        for(var i = 0; i < this.todos.length; i++){
            console.log(this.todos[i].todoText);
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
  }
};

todoList.displayTodos();
todoList.addTodo('an item');
todoList.deleteTodo();
// todoList.displayTodos();
todoList.addTodo('second');
// todoList.displayTodos();

// code42:~/workspace/CareerDevsWnC (v5-loopsoflogic) $ node version5_loopsoflogic.js 
// hey
// hey
// hey
// item 1
// item 2
// item 3
// My Todos [ { todoText: 'first', completed: false } ]
// first
// My Todos [ { todoText: 'first', completed: false },
//   { todoText: 'second', completed: false } ]
// first
// second
// code42:~/workspace/CareerDevsWnC (v5-loopsoflogic) $ 



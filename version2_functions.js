/*
makeTurkeySandwich
    Get one slice of bread.
    Add turkey.
    Put a slice of bread on top.
    
function makeTurkeySandwich(){
    Get one slice of bread;
    Add turkey;
    Put a slice of bread on top;
}

makeTurkeySandwich()

makeSandwichWith _____
    Get one slice of bread.
    Add ______.
    Put a slice of bread on top.
    
function makeSandwichWith(filling){
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top;
}    

makeSandwichWith _ham_
makeSandwichWith('ham')

console.log('My Todos', todos)

function sayHiTo(person){
    console.log('hi', person);
}

sayHiTo('gordon')  // hi gordon

V2 Requirements
It should have a function to:
display todos
add todos
change todos
delete todos
*/

var todos = ['item 1', 'item 2', 'item 3']

function displayTodos(){
    console.log('My todos:', todos);
}

displayTodos();
// My todos: [ 'item 1', 'item 2', 'item 3' ]

function addTodo(){
    todos.push('new todo');
    displayTodos();
}

addTodo();
// todos
displayTodos()
// My todos: [ 'item 1', 'item 2', 'item 3' ]
// My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]

// run it one more time
addTodo();
// todos
displayTodos()
// My todos: [ 'item 1', 'item 2', 'item 3' ]
// My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
// My todos: [ 'item 1', 'item 2', 'item 3', 'new todo', 'new todo' ]
// My todos: (6) ["item 1", "item 2", "item 3", "new todo", "new todo", "new todo"]


function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

addTodo('hello there')
// ["item 1", "item 2", "item 3", "new todo", "new todo", "new todo", "hello there"]

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

changeTodo(0, 'changed')

displayTodos()
// VM76:2 My todos: (7) ["changed", "item 2", "item 3", "new todo", "new todo", "new todo", "hello there"]


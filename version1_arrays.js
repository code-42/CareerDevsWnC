// V1 Requirements
// It should have a way to:
// store todos
// display todos
// add new todos
// change a todos
// delete a todo

// store todos
var todos = ['item1','item2','item3'];

// display todos
console.log('My todos:', todos);

// add new todos
todos.push('item 4');
console.log('My todos:', todos);
todos.push('item 5');
console.log('My todos:', todos);
todos.push('new todo');
console.log('My todos:', todos);

// changing the first item
todos[0] = 'item 1 updated';
console.log('My todos:', todos);
todos[0] = 'changed!';
console.log('My todos:', todos);

// Deleteing the first item
todos.splice(0,1);
console.log('My todos:', todos);

// make a new branch for this file version1_arrays.js
// git checkout -b v1
// git status
// git add .
// git commit -m "make a new branch for this file version1_arrays.js"
// git push

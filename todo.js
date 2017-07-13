// version 1 - arrays
var todos = ['item 1', 'item 2', 'item 3']

// it should have a way to display todos
console.log(todos);
console.log(todos[0]);
console.log(todos[1]);
console.log(todos[2]);


// it should have a way to add todos
console.log("adding item 4 and item 5...")
todos.push('item 4');
console.log(todos);
todos.push('item 5');
console.log(todos);

// it should have a way to change todos
console.log("changing item 1...")
todos[0] = 'item 1 updated';
console.log(todos);

// it should have a way to delete todos
console.log("deleting item 1...")
todos.splice(0,1);
console.log(todos);
console.log("deleting item 5...")
todos.splice(3,1);
console.log(todos);



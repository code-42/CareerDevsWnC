var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
}

myComputer
Object {operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}
myComputer.operatingSystem
"mac"
myComputer.screenSize
"15 inches"
myComputer.pu
undefined
myComputer.purchaseYear
2011

var gordon = {
    name: 'Gordon',
    sayName: function(){
		console.log(this);
    }
}
undefined
gordon.sayName();
VM484:4 Object {name: "Gordon", sayName: function}name: "Gordon"sayName: function ()__proto__: Object
undefined
var gordon = {
    name: 'Gordon',
    sayName: function(){
		console.log(this.name);
    }
}
undefined
gordon.sayName();
VM528:4 Gordon

// video @ 4:29 "sayName is a method on the gordon object"


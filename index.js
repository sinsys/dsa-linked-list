const LinkedList = require('./LinkedList');

let list = new LinkedList;

list.insertFirst('one');
list.insertFirst('two');
list.insertFirst('three')

console.log(JSON.stringify(list));
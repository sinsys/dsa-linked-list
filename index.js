const LinkedList = require('./LinkedList');

let list = new LinkedList;

list.insertLast('one');
list.insertLast('two');
list.insertLast('three')

console.log(JSON.stringify(list));
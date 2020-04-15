// Write an algorithm to find whether a linked list has a cycle 
// (i.e., whether a node in the list has its next value pointing 
// to an earlier node in the list). For this exercise, create 
// a linked list with the name CycleList. Be sure to insert 
// nodes in the list so that it has a cycle. Then test your 
// program with a cycleList function.

// Setup to get a linked list in play
const { LinkedList } = require('./linked-list-class');

const linkListFuncs = require('./supplemental-functions');

const CycleList = new LinkedList;
let itemsToAdd = ['Schwinn', 'Haro', 'Gary Fisher', 'Huffy', 'Mongoose'];
itemsToAdd.forEach(item => CycleList.insertLast(item));

const isCycle = (linkList) => {

  // Setup a slow node to traverse one at a time
  let slowNode = linkList.head;
  // Setup a fast node to traverse two at a time
  let fastNode = linkList.head;

  // While we still have two values to traverse
  while ( 
    fastNode.next !== null &&
    fastNode.next.next !== null 
  ) {
    // Increase fast node by 2 indexes
    slowNode = slowNode.next;
    // Increase slow node by 1 index
    fastNode = fastNode.next.next;

    if ( fastNode == slowNode ) {
      return true;
    }
  }
  // No loop found
  return false;
}

// Uncycled List
console.log("\nIs a Cycle:\n");
console.log(isCycle(CycleList));
console.log(linkListFuncs.display(CycleList));

// Cycle the List
CycleList.head.next.next.next.next.next = CycleList.head.next;
console.log("\nIs a Cycle:\n");
console.log(isCycle(CycleList));
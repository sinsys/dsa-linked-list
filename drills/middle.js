// Write an algorithm to find the middle element of a linked list. Note You 
// may be tempted to add a length property to your linked list class. The 
// length property is not a typical property of linked list, therefore don't 
// make any modification to the linked list class that is provided to you. 

// Also, finding the size of the linked list using the size() function and 
// dividing it by half will not find the correct middle of the linked list. 
// So, don't use either of these approaches.

// Setup to get a linked list in play
const { main } = require('./single-linked-list');
const linkListFuncs = require('./supplemental-functions');
let SSL = main();

const findMiddle = (linkList) => {

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
    fastNode = fastNode.next.next;
    // Increase slow node by 1 index
    slowNode = slowNode.next;
  }
  // Return the node that was traversing at half speed
  return slowNode;
}

console.log(linkListFuncs.display(SSL));
console.log("\nMiddle Node:\n");
console.log(findMiddle(SSL));
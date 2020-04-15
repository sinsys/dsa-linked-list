// Write an algorithm to find the 3rd element from the end of a linked 
// list. Note You may be tempted to add a length property to your linked 
// list class. The length property is not a typical property of linked 
// list, therefore don't make any modification to the linked list class 
// that is provided to you.

const { main } = require('./single-linked-list');
const linkListFuncs = require('./supplemental-functions');
let SSL = main();

const findThird = (linkList) => {
  // Setup our first node
  let currNode = linkList.head;
  if ( !currNode.next || !currNode.next.next ) {
    return "List is not at least 3 long";
  }
  // While we have a current node
  while ( currNode.next.next.next !== null ) {
    // Store our next node temporarily
    currNode = currNode.next;
  }

  return currNode;
};

console.log(linkListFuncs.display(SSL));
console.log("\nThird Node from the end:\n");
console.log(findThird(SSL));
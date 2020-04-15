// Write an algorithm to reverse a linked list. The time complexity of your 
// algorithm should be linear (O(n)). For this exercise, notice we are not 
// asking you just to print the linked list in reverse or use another linked 
// list to store the value in reverse order. Your program should reverse 
// the direction of a given singly linked list. In other words, all pointers 
// should point backward. BONUS: Solve this problem using both recursive 
// and iterative algorithms.

// Setup to get a Linked List in play
const { main } = require('./single-linked-list');

let SSL = main();


const reverseList = (linkList) => {
  // Setup our first node
  let currNode = linkList.head;

  // Two storage vars to ensure we don't destroy data or loop infinitely
  let prevNode;
  let tempNode;

  // While we have a current node
  while ( currNode ) {
    // Store our next node temporarily
    tempNode = currNode.next;

    // Set our current node's next node to the previous node
    // This will be null if it is the first node
    currNode.next = prevNode;

    // Set our previous node to be the current node
    prevNode = currNode;

    // And store the current node as our stored away next node
    currNode = tempNode;
  }

  // Retain all Class properties of original argument
  linkList.head = prevNode;
  // Return our reversed LinkedList
  return linkList;
}

// Demonstration for PoC
console.log("Before Reverse:\n");
console.log(SSL);
console.log("\nAfter Reverse:\n");
console.log(reverseList(SSL));

// O(n) time & O(n) space
const recurseReverse = (linkList, original) => {
  original = original || linkList;
  let head;
  linkList.head
    ? head = linkList.head
    : head = linkList;

  if (!head || !head.next) {
    original.head = head;
    return original;
  }
  let tmp = recurseReverse(head.next, original);
  head.next.next = head;
  head.next = undefined;
  return tmp;
};

// Demonstration for PoC
console.log("Before Reverse:\n");
console.log(SSL);
console.log("\nAfter Reverse:\n");
console.log(recurseReverse(SSL));
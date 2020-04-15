// Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: 
//   - Apollo, Boomer, Helo, Husker, Starbuck.
//   - Add Tauhida to the list.
//   - Remove Husker from the list.
//   - Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
//   - Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
//   - Implement a function called insertAt() that inserts an item at a specific position in the linked list.
//   - Add Athena before Boomer using your insertBefore() function.
//   - Add Hotdog after Helo using the insertAfter() method.
//   - Using the insertAt() method insert Kat in the 3rd position of the list.
//   - Remove Tauhida from the list.

const { LinkedList, _Node } = require('./linked-list-class');

const main = () => {
  // Create a linked list with the name SLL
  let SSL = new LinkedList;

  // Add the following items to your linked list: 
  //   - Apollo, Boomer, Helo, Husker, Starbuck.
  let itemsToAdd = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  itemsToAdd.forEach(item => SSL.insertLast(item));

  // Add Tauhida to the list.
  SSL.insertLast('Tauhida');

  // Remove Husker from the list.
  SSL.remove('Husker');

  // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
  LinkedList.prototype.insertBefore = function(item, target) {
    // If our head is null, the linked list is empty
    if ( !this.head ) {
      return null;
    }

    // Save our current Node
    let currNode = this.head;
    // Declare a prevNode for traversing so we know where to insert
    let prevNode = this.head;

    // Look for our item
    while ( currNode.val !== target ) {
      // Return null if its the end of the list and the target is not in the list
      if ( currNode.next === null ) {
        return null;
      } else {
        // Shift our nodes to the next one
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    // Set the prior node's next equal to a new Node with our new item
    prevNode.next = new _Node(item, currNode);
  };

  // Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
  LinkedList.prototype.insertAfter = function(item, target) {
    // If our head is null, the linked list is empty
    if ( !this.head ) {
      return null;
    }

    // Save our current Node
    let currNode = this.head;

    // Look for our item
    while ( currNode.val !== target ) {
      // Return null if its the end of the list and the target is not in the list
      if ( currNode.next === null ) {
        return null;
      } else {
        // Shift our nodes to the next one
        currNode = currNode.next;
      }
    }

    // Set the target node's next equal to a new Node with our new item, and our next to the target Node's next value
    currNode.next = new _Node(item, currNode.next);
  }

  // Implement a function called insertAt() that inserts an item at a specific position in the linked list.
  LinkedList.prototype.insertAt = function(item, index) {
    // If our head is null, the linked list is empty
    if ( !this.head ) {
      return null;
    }

    if ( index === 0 ) {
      this.insertFirst(item);
      return;
    }
    // Save our current Node
    let currNode = this.head;
    // Declare a prevNode for traversing so we know where to insert
    let prevNode = this.head;

    let counter = 0;

    // Look for our item
    while ( counter < index ) {
      // Return null if its the end of the list and the target is not in the list
      if ( currNode.next === null ) {
        return null;
      } else {
        counter++;
        // Shift our nodes to the next one
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    // Set the prior Node's next equal to our new item and the current item as its next
    prevNode.next = new _Node(item, currNode);

  }  
  
  // Add Athena before Boomer using your insertBefore() function.
  SSL.insertBefore("Athena", "Boomer");
  // Add Hotdog after Helo using the insertAfter() method.
  SSL.insertAfter("Hotdog", "Helo");
  // Using the insertAt() method insert Kat in the 3rd position of the list.
  SSL.insertAt("Kat", 3);
  // Remove Tauhida from the list.
  SSL.remove("Tauhida");

  return SSL;
}

// This is just to print off our list in the console
// const printLinkedList = (linkedList) => {

//   if ( linkedList.next === null ) {
//     return linkedList.val;
//   }

//   console.log(linkedList.val);
//   printLinkedList(linkedList.next);

// }

// let ourLinkedList = main();
// printLinkedList(ourLinkedList.head);

// Exported existing linked list for drill 3. Supplemental functions
module.exports = { main };
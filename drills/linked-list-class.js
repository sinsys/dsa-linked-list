class _Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  };
};


class LinkedList {
  constructor() {
    this.head = null;
  };

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  };

  insertLast(item) {
    // If our head is null, the linked list is empty
    if ( this.head === null ) {
      this.insertFirst(item);
    } else {
      // Save our current head
      let tempNode = this.head;
      // Search until next is null (end of linked list)
      while ( tempNode.next !== null ) {
        // Iterates all the way to the end of the linked list
        tempNode = tempNode.next;
      }
      // Set our pointer of our last item to our new item
      // And insert that item
      tempNode.next = new _Node(item, null);
    };
  };

  find(item) {
    // Save our current head
    let currNode = this.head;
    // If our head is null, the linked list is empty
    if ( !this.head ) {
      return null;
    };

    // Look for our item
    while ( currNode.val !== item ) {
      // Return null if its the end of the list and the item is not on the list
      if ( currNode.next === null ) { 
        return null;
      } else {
        // Otherwise keep looking
        currNode = currNode.next;
      };
    };
    // Found it
    return currNode;
  };

  remove(item) {
    // If our head is null, the linked list is empty
    if ( !this.head ) {
      return null;
    };

    // If the node to be removed is the head, make the next node head
    if ( this.head.val === item ) {
      this.head = this.head.next;
      return;
    };

    // Start at the head
    let currNode = this.head;
    // Keep track of the previous
    let prevNode = this.head;

    // While we aren't at the tail and our value isn't the value to be deleted
    while ( 
      currNode !== null &&
      currNode.val !== item
    ) {
      // Shift our nodes to the next one
      prevNode = currNode;
      currNode = currNode.next;
    };

    // If we hit the tail and didn't find the item
    if ( currNode === null ) {
      console.log('Item not found');
      return;
    };

    prevNode.next = currNode.next;
  };

  // Added from "2. Creating a singly linked list"
  //   - Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
  //   - Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
  //   - Implement a function called insertAt() that inserts an item at a specific position in the linked list.
  insertBefore(item, target) {
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

  insertAfter(item, target) {
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
  };

  insertAt(item, index) {
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
    };
    // Set the prior Node's next equal to our new item and the current item as its next
    prevNode.next = new _Node(item, currNode);

  };
}

module.exports = { 
  LinkedList,
  _Node
}
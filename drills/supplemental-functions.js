
// Implement the following functions that operate on your linked list class. 
// Note that these should be free functions instead of methods of the linked list class, 
// so implement them outside the linked list class. Test each function using the list 
// created in exercise 1.

//   - display: displays the linked list
//   - size: returns the size of the linked list
//   - isEmpty: finds if the list is empty or not (without using the size() function)
//   - findPrevious: finds the node before the item you are looking for
//   - findLast: returns the last node in the linked list

const linkListFuncs = {

  //  display: displays the linked list
  display: (linkList) => {
    // Get a box to gather our item values
    items = [];

    // If we have no head property it isn't a linked list
    if ( linkList.head === null ) {
      return "Linked list is empty";
    }

    // If there is a head property, we setup our iterations on that object
    if ( linkList.head ) {
      linkList = linkList.head
    }

    // General case. Iterates through every item until next becomes null (end of the list)
    while ( linkList.next !== null ) {
      // Iterates all the way to the end of the linked list
      // Adds the items to our box
      items.push(" - " + linkList.val);
      // Sets our linkList to the next node
      linkList = linkList.next;
    }
    // Push the last item to our box
    items.push(" - " + linkList.val);
    // Return the list with line breaks
    return items.join('\n');
  },

  //  size: returns the size of the linked list
  size: (linkList) => {
    // Get a box to gather our item values
    count = 0;

    // If we have no head property it isn't a linked list
    if ( linkList.head === null ) {
      return "Linked list is empty";
    }

    // If there is a head property, we setup our iterations on that object
    if ( linkList.head ) {
      linkList = linkList.head
    }

    // General case. Iterates through every item until next becomes null (end of the list)
    while ( linkList.next !== null ) {
      // Iterates all the way to the end of the linked list
      // Adds the items to our count
      count++;
      // Sets our linkList to the next node
      linkList = linkList.next;
    }
    // Add the final item
    count++;
    // Return the count
    return count; 
  },

  //  isEmpty: finds if the list is empty or not (without using the size() function)
  isEmpty: (linkList) => {
    return !linkList.head;
  },

  //  findPrevious: finds the node before the item you are looking for
  findPrevious: (linkList, target) => {
    // If our head is null, the linked list is empty
    if ( !linkList.head ) {
      return null;
    }

    // Save our current Node
    let currNode = linkList.head;
    // Declare a prevNode for traversing so we know where to insert
    let prevNode = linkList.head;

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
    return prevNode;
  },

  //  findLast: returns the last node in the linked list
  findLast: (linkList) => {
    // If our head is null, the linked list is empty
    if ( !linkList.head ) {
      return null;
    }

    // Save our current head
    let tempNode = linkList.head;

    // Search until next is null (end of linked list)
    while ( tempNode.next !== null ) {
      // Iterates all the way to the end of the linked list
      tempNode = tempNode.next;
    }
    // Set our pointer of our last item to our new item
    // And insert that item
    return tempNode;
  }
};


// Turn these on to see results

// const { main } = require('./single-linked-list');
// let SSL = main();

// console.log("Display the SSL:\n" + linkListFuncs.display(SSL) + "\n");
// console.log("Display the size: " + linkListFuncs.size(SSL) + "\n");
// console.log("Is empty?: " + linkListFuncs.isEmpty(SSL) + "\n");
// console.log("Find Previous with 'Kat' input:\n  " + JSON.stringify(linkListFuncs.findPrevious(SSL, "Kat")) + "\n");
// console.log("Find last:\n  " + JSON.stringify(linkListFuncs.findLast(SSL)) + "\n");

module.exports = linkListFuncs;
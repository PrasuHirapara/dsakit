// const SinglyLinkedList = require('./dataStructures/linked list/SinglyLinkedList.js');

// let ll = new SinglyLinkedList();

// ll.insert(40);
// ll.insert(45);
// ll.insert(50);
// ll.insert(55);
// ll.insert(60);

// ll.display()

// ll.insertAtHead(40);
// ll.insertAtIndex(58, 5);

// ll.display();

// ll.remove();
// ll.removeAtHead();
// ll.display();
// ll.removeAtIndex(3);
// ll.display();

// console.log(ll.peek());

// console.log(ll.contains(58));
// console.log(ll.indexOf(58));

const timSort = require('./algorithms/sorting/timSort.js');
const heapSort = require('./algorithms/sorting/heapSort.js')

let arr = [1,2,3,4];
heapSort(arr , true , false);

console.log(arr);


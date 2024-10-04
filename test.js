const SinglyLinkedList = require('./dataStructures/linked list/SinglyLinkedList.js');

const arr = [5,23453,52];

const ll = new SinglyLinkedList();

ll.display()

ll.fromArray(arr);

ll.display();

const array = ll.getArray();
console.log(array);

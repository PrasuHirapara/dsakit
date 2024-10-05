const CircularLinkedList = require('./dataStructures/linked list/CircularLinkedList.js');

let ll = new CircularLinkedList();

ll.insert(2)
ll.fromArray([3,4,5,6])
ll.display();


let ll2 = new CircularLinkedList();
ll2.fromArray([7,8,9,10,11,12]);

ll.addAll(ll2);
ll.display();
ll2.display();
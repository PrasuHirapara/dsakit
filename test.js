const dsa = require('./index.js');

let ll =new dsa.SinglyLinkedList();

ll.insert(1)
ll.fromArray([2,3,4,5,6])
ll.display();
ll.removeAtIndex(5);
ll.display();
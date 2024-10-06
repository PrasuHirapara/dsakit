const dsa = require('./index.js');

let arr = [36,56,16,-232456,913,3658,8365427]

let ll =new dsa.SinglyLinkedList();

ll.insert(1)
ll.fromArray([2,3,4,5,6])
ll.display();
ll.removeAtIndex(5);
ll.display();
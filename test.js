const dsa = require("./index.js");

pQueue = new dsa.PriorityQueue();

pQueue.enqueue("A" , 1);
pQueue.enqueue("B" , 2);
pQueue.enqueue("C" , 3);

pQueue.printQueue();
console.log("Peek:", pQueue.peek());

console.log("Dequeued:", pQueue.dequeue());
pQueue.printQueue();

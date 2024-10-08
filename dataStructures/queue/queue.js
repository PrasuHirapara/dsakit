/**
 * Queue is a data structure that follows the First-In-First-Out (FIFO) strategy.
 * It is used to store values in a sequential manner where the first element added is the first to be removed.
 * It is commonly used in scheduling processes, resource sharing, and when the order of processing matters.
 * 
 * @method enqueue - Inserts data at the tail (end) of the Queue.
 *                 - Time complexity: O(1)
 * 
 * @method dequeue - Removes and returns the element at the head (front) of the Queue.
 *                 - Time complexity: O(1)
 * 
 * @method peek - Returns the element at the head of the Queue without removing it.
 *              - Time complexity: O(1)
 * 
 * @method size - Returns the number of items in the Queue.
 *              - Time complexity: O(1)
 * 
 * @method clear - Clears all data from the Queue.
 *               - Time complexity: O(1)
 * 
 * @method isEmpty - Returns true if the Queue is empty.
 *                 - Time complexity: O(1)
 * 
 * @method display - Displays all the elements in the Queue from head to tail.
 *                 - Time complexity: O(n)
 * 
 * @returns - Object of class Queue.
*/

const SinglyLinkedList = require("../linked list/SinglyLinkedList");
class Queue{
    constructor() {
        this._list = new SinglyLinkedList();
    }
    
    // Adds an element at the tail of the queue 
    enqueue(data){
        this._list.insert(data);
    }

    // Remove and returns the element at the head of the queue 
    dequeue() {
        return this._list.removeAtHead();
    }

    // Returns the element at the head
    peek() {
        return this._list.peek();
    }

    // Returns true if the queue is empty
    isEmpty() {
        return this._list.isEmpty();
    }

    // Returns the number of elements in queue
    size() {
        return this._list.length();
    }

    // Display the elements of the queue
    display() {
        this._list.display();
    }

    // Clear all elements from the queue
    clear() {
        this._list = new SinglyLinkedList();
    }
}

module.exports = Queue;
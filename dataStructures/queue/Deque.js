/**
 * Deque (Double-ended Queue) implemented using a Singly Linked List. Each node contains data and a pointer to the next node.
 * This allows insertion and deletion from both the head (front) and the tail (rear) of the deque.
 * 
 * @method addFirst - Inserts data at the head (front) of the deque.
 *                  - Time Complexity: O(1)
 * 
 * @method addLast - Inserts data at the tail (rear) of the deque.
 *                 - Time Complexity: O(n)
 * 
 * @method removeFirst - Removes data from the head (front) of the deque.
 *                     - Time Complexity: O(1)
 * 
 * @method removeLast - Removes data from the tail (rear) of the deque.
 *                    - Time Complexity: O(n)
 * 
 * @method peekFirst - Returns the data of the first element (head) of the deque.
 *                   - Time Complexity: O(1)
 * 
 * @method peekLast - Returns the data of the last element (tail) of the deque.
 *                  - Time Complexity: O(n)
 * 
 * @method offerFirst - Inserts data at the head (front) of the deque (alternative name for addFirst).
 *                    - Time Complexity: O(1)
 * 
 * @method offerLast - Inserts data at the tail (rear) of the deque (alternative name for addLast).
 *                   - Time Complexity: O(n)
 * 
 * @method pollFirst - Removes and returns the data of the first element (head) of the deque.
 *                   - Time Complexity: O(1)
 * 
 * @method pollLast - Removes and returns the data of the last element (tail) of the deque.
 *                  - Time Complexity: O(n)
 * 
 * @method isEmpty - Checks if the deque is empty.
 *                 - Time Complexity: O(1)
 * 
 * @method size - Returns the number of elements in the deque.
 *              - Time Complexity: O(1)
 * 
 * @method clear - Removes all elements from the deque.
 *               - Time Complexity: O(1)
 * 
 * @method display - Prints the data of the deque.
 *                 - Time Complexity: O(n)
 * 
 * @returns - Object of the Deque class.
 */

const SinglyLinkedList = require("../linked list/SinglyLinkedList");

class Deque {
    constructor(){
        this._singlyLinkedList = new SinglyLinkedList();
    }
    
    // add at start
    addFirst(data){
        this._singlyLinkedList.insertAtHead(data);
    }

    // add at last;
    addLast(data){
        this._singlyLinkedList.insert(data);
    }

    // remove first
    removeFirst(){
        return this._singlyLinkedList.removeAtHead();
    }

    // remove last
    removeLast(){
        return this._singlyLinkedList.remove();
    }

    // peek first
    peekFirst(){
        return this._singlyLinkedList.peek();
    }

    // peek last
    peekLast(){
        return this._singlyLinkedList.peekTail();
    }

    // same as addFirst
    offerFirst(data){
        return this.addFirst(data);
    }

    // same as addLast
    offerLast(data){
        return this.addLast(data);
    }

    // same as removeFirst
    pollFirst(){
        return this.removeFirst();
    }

    // same as removeLast
    pollLast(){
        return this.removeLast();
    }

    // returns true if deque is empty
    isEmpty(){
        return this._singlyLinkedList.length() === 0;
    }

    // returns the size of the deque
    size(){
        return this._singlyLinkedList.length();
    }

    // clears object
    clear(){
        return this._singlyLinkedList = new SinglyLinkedList();
    }

    // dislpays current deque
    display(){
        return this._singlyLinkedList.display();
    }
}

module.exports = Deque;
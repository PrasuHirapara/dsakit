/**
 * PriorityQueue is a data structure where each element is associated with a priority.
 * Elements with higher priority (lower numerical value) are dequeued before elements with lower priority.
 * This implementation uses a Singly Linked List to maintain the order of elements based on priority.
 *
 * @method enqueue - Inserts data into the Priority Queue based on its priority.
 *                 - Time complexity: O(n) (inserting at the correct position requires traversal)
 *
 * @method dequeue - Removes and returns the element with the highest priority (lowest numerical value).
 *                 - Time complexity: O(1) (removes from the head)
 *
 * @method peek - Returns the element with the highest priority without removing it.
 *              - Time complexity: O(1)
 *
 * @method isEmpty - Returns true if the Priority Queue is empty.
 *                 - Time complexity: O(1)
 *
 * @method printQueue - Displays all the elements in the Priority Queue in the format:
 *                      [Data: <data>, Priority: <priority>] -> ... -> End
 *                    - Time complexity: O(n)
 *
 * @returns - Object of class PriorityQueue.
 */


const SinglyLinkedList = require("../linked list/SinglyLinkedList");

class PriorityQueue{
    constructor(){
        this.list = new SinglyLinkedList();
    }

    enqueue(data , priority){
        const newNode = {data , priority};

        if(!this.list._head || this.list._head.data.priority > priority){
            this.list.insertAtHead(newNode);
            return;
        }

        let current = this.list._head;
        let index = 0;

        while(current.next && current.next.data.priority <= priority){
            current = current.next;
            index++;
        }

        this.list.insertAtIndex(newNode , index + 1);
    }

    dequeue(){
        if(!this.list._head){
            throw new Error("Priority queue is empty");
        }

        return this.list.removeAtHead().data;
    }

    peek(){
        if(!this.list._head){
            throw new Error("Priority queue is empty.");
        }

        return this.list._head.data;
    }

    isEmpty(){
        return this.list.length() === 0;
    }

    printQueue(){
        if(this.list._head){
            let current = this.list._head;
            const result = [];
            while(current){
                result.push(`[Data: ${current.data.data}, Priority: ${current.data.priority}]`);
                current = current.next;
            }
            console.log(result.join(' -> '));
        }else{
            console.log("Priority queue is empty.");
        }
    }
}

module.exports = PriorityQueue;
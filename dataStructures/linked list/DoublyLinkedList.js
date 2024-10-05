class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * Doubly Linked List is a data structure where each node contains data and two pointers: 
 * one to the next node and one to the previous node. This allows for efficient traversal in both directions.
 * 
 * @method insert - Inserts data at the tail (end) of the doubly linked list.
 *                - Time Complexity: O(1)
 * 
 * @method insertAtHead - Inserts data at the head (beginning) of the doubly linked list.
 *                      - Time Complexity: O(1)
 * 
 * @method insertAtIndex - Inserts data at a particular index.
 *                       - Time Complexity: O(n)
 * 
 * @method remove - Removes data at the tail (end) of the doubly linked list.
 *                - Time Complexity: O(1)
 * 
 * @method removeAtHead - Removes data at the head (beginning) of the doubly linked list.
 *                      - Time Complexity: O(1)
 * 
 * @method removeAtIndex - Removes data at a particular index.
 *                       - Time Complexity: O(n)
 * 
 * @method peek - Returns the first element (head) of the doubly linked list.
 *              - Time Complexity: O(1)
 * 
 * @method length - Returns the number of elements in the doubly linked list.
 *                - Time Complexity: O(1)
 * 
 * @method contains - Returns true if the doubly linked list contains a particular value.
 *                  - Time Complexity: O(n)
 * 
 * @method indexOf - Returns the index of a particular value in the doubly linked list, or -1 if not found.
 *                 - Time Complexity: O(n)
 * 
 * @method reverse - Reverses the doubly linked list in place.
 *                 - Time Complexity: O(n)
 * 
 * @method fromArray - Converts an array into the doubly linked list, adding its values to the list.
 *                   - Time Complexity: O(n)
 * 
 * @method addAll - Adds all values from another doubly linked list to the current list.
 *                - Time Complexity: O(n + k), where n is the length of the current list and k is the length of the other list.
 * 
 * @method display - Prints the data of the doubly linked list in order.
 *                 - Time Complexity: O(n)
 * 
 * @method getArray - Converts the doubly linked list to an array.
 *                  - Time Complexity: O(n)
 * 
 * @returns - Object of the Doubly Linked List class.
 */

class DoublyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    // insert at tail
    insert(data) {
        const node = new Node(data);

        if (!this._head) {
            this._head = this._tail = node;
        } else {

            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }

        this._length++;
    }

    // insert at head
    insertAtHead(data) {
        const node = new Node(data);

        if (!this._head) {
            this._head = this._tail = node;
        } else {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        }

        this._length++;
    }

    // insert at index
    insertAtIndex(data, index) {
        if (index > this._length || index < 0) {
            throw new Error("Invalid index");
        } else if (index === 0) {
            return this.insertAtHead(data);
        } else if (index === this._length) {
            return this.insert(data);
        } else {
            let node = this._head;
            let currentIndex = 0;

            while (currentIndex !== index - 1) {
                node = node.next;
                currentIndex++;
            }

            // Insert the new node between `node` and `node.next`
            const temp = node.next;
            const newNode = new Node(data);
            newNode.prev = node;
            node.next = newNode;
            newNode.next = temp;
            temp.prev = newNode;

            this._length++;
        }
    }

    // remove at tail
    remove() {
        if (this._length <= 0) {
            return null;
        }

        const removed = this._tail.data;

        if (this._length === 1) {
            // If there is only one node, set both _head and _tail to null
            this._head = this._tail = null;
        } else {
            this._tail = this._tail.prev;
            this._tail.next = null;
        }

        this._length--;
        return removed;
    }

    // remove at head
    removeAtHead() {
        if (!this._head) {
            return null;
        }

        const removed = this._head.data;
        if (this._length === 1) {
            this._head = this._tail = null;
        } else {
            this._head = this._head.next;
            this._head.prev = null;
        }

        this._length--;
        return removed;
    }

    // remove at specific index
    removeAtIndex(index){
        if(index >= this._length || index < 0){
            throw new Error("Invalid index");
        }else if(index === 0){
            return this.removeAtHead();
        }else if(index === this._length - 1){
            return this.remove();
        }else{
            let node = this._head;
            let currentIndex = 0;

            while(currentIndex !== index - 1){
                currentIndex++;
                node = node.next;
            }

            const removedData = node.next.data;
            let removeNode = node.next;

            node.next = removeNode.next;

            if(removeNode.next){
                removeNode.next.prev = node;
            }
           
            this._length--;
            return removedData;
        }
    }

    // peek element
    peek(){
        return this._length === 0 ? null : this._head.data;
    }

    // length
    length(){
        return this._length;
    }

    //  returns true if element is present else returns false
    contains(data){
        if(this._length === 0){
            return false;
        }

        let node = this._head;
        while(node){
            if(node.data === data){
                return true; // element found
            }

            node = node.next;
        }

        return false; // element no found
    }

    // return first index of element if present else return -1
    indexOf(data){
        if(this._length === 0){
            return -1;
        }

        let index = 0;
        let node = this._head;

        while(node){
            if(node.data === data){
                return index;
            }else{
                node = node.next;
                index++;
            }
        }
        
        return -1;
    }

    // reverse the linked list in place
    reverse(){
        if(this._length <= 1){
            return;
        }

        let curr = this._head;
        let temp = null;

        while(curr){
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev; // move to the next node
        }
        
    if (temp) {
        this._head = temp.prev; // Update head to the last processed node
        this._tail = temp; // Set tail to the old head
    }
    }

    // Adds value of other Linked list to current linked list
    addAll(head2){

        if(!head2){
            return;
        }

        let h2 = head2._head;

        while(h2){
            this.insert(h2.data);
            h2 = h2.next;
        }
    }

    // fromArray
    fromArray(array){
        if(!array || array.length <= 0){
            return;  // If the array is null or empty, do nothing
        }

        for(const elem of array){
            this.insert(elem); // Insert each element into the list
        }
    }

    // getArray
    getArray(){
        
        let array = [];
        let temp = this._head;

         // Traverse through the list and push each node's data to the array
        while(temp){
            array.push(temp.data);
            temp = temp.next;
        }

        return array;
    }

    // display the Linked list
    display(){
        if(!this._head){
            console.log("No data found. Insert elements first.");
            return;
        }

        let str = '';
        let node = this._head;

        // Traverse the list and build the output string
        while(node){
            str += node.data + ' -> ';
            node = node.next;
        }

        str += 'End';

        console.log(str);
    }
}

module.exports = DoublyLinkedList;
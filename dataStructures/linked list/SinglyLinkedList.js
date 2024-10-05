/**
 * Node is the object which contains data and address of next node.
 * @returns - Object of class Node
 */
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

/**
 * Linked List is data stucture which store data in non continues locations.
 * It consist of chains of Node which contains data and address of next Node.
 * @method insert - Insert data at tail.
 *                - Time Complexity: O(1)
 * @method insertAtHead - Insert data at Head ( starting of Linked List ).
 *                - Time Complexity: O(1)
 * @method insertAtIndex - Insert data at perticular index.
 *                - Time Complexity: O(n)
 * @method remove - remove data at tail.
 *                - Time Complexity: O(n)
 * @method removeAtHead - remove data at Head ( starting of Linked List ).
 *                - Time Complexity: O(1)
 * @method removeAtIndex - remove data at perticular index.
 *                - Time Complexity: O(n)
 * @method peek - Return peek element and its data.
 *                - Time Complexity: O(1)
 * @method length - Returns length of Linked List
 *                - Time Complexity: O(1)
 * @method contains - Returns true if Linked List contains perticular data.
 *                - Time Complexity: O(n)
 * @method indexOf - Returns index value of perticular data if present else -1.
 *                - Time Complexity: O(n)
 * @method reverse - Reverses Linked List in place.
 *                - Time Complexity: O(n)
 * @method addAll - Adds values of other Linked list.
 *                - Time Complexity: O(n + k)
 * @method display - Prints the data
 *                 - Time complexity: O(n)
 * @returns - Object of class Linked List.
 */

class SinglyLinkedList{
    constructor(){
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    // insert at tail
    insert(data){
        const node = new Node(data);

        if(!this._head){
            this._head = this._tail = node;
        }else{
            this._tail.next = node;
            this._tail = node;
        }

        this._length++;
    }

    // insert at head
    insertAtHead(data){
        const node = new Node(data);

        if(!this._head){
            this._head = this._tail = node;
        }else{
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
            let currIndex = 0;
    
            while (currIndex !== index - 1) {
                node = node.next;
                currIndex++;
            }
    
            const temp = node.next;
            node.next = new Node(data);
            node.next.next = temp;
            this._length++;
        }
    }

    // remove at tail
    remove(){
        if(this._length <= 0){
            return null;
        }

        let node = this._head;
        while(node.next !== this._tail){
            node = node.next;
        }

        let removed = this._tail.data;
        node.next = null;
        this._tail = node;

        this._length--;

        return removed;
    }

    // remove at head
    removeAtHead(){
        if(!this._head){
            return null;
        }

        const removed = this._head.data;
        let node = this._head.next;
        this._head.next = null;
        this._head = node;
        this._length--;

        return removed;
    }

    // remove at specific index
    removeAtIndex(index) {
        if (index >= this._length || index < 0) {
            throw new Error("Invalid index");
        } else if (index === 0) {
            return this.removeAtHead();
        } else if (index === this._length - 1) {
            let node = this._head;
            let currIndex = 0;
    
            while (currIndex !== this._length - 2) {
                node = node.next;
                currIndex++;
            }
    
            let removed = this._tail.data;
            node.next = null;
            this._tail = node;
    
            this._length--;
            return removed;
        } else {
            let node = this._head;
            let currIndex = 0;
    
            while (currIndex !== index - 1) {
                currIndex++;
                node = node.next;
            }
    
            let removed = node.next.data;
            node.next = node.next.next;
    
            this._length--;
    
            return removed;
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

    // returns true if element is present else returns false
    contains(data){
        if(this._length === 0){
            return false;
        }

        let node = this._head;
        while(node){
            if(node.data === data){
                return true;
            }
            node = node.next;
        }

        return false;
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
                return index
            }else{
                node = node.next;
                index++;
            }
        }

        return -1;
    }

    // reverses the Linked List in place
    reverse() {
        if (this._length === 0) {
            return;
        }
    
        let prev = null;
        let curr = this._head;
        let next = null;
    
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
    
        this._tail = this._head;
        this._head = prev;
    }
    
    // Adds value of other Linked List to current Linked List
    addAll(head2){
        if(!head2){
            return;
        }

        let h2 = head2;

        while(h2){
            this.insert(h2.data);
            h2 = h2.next;
        }
    }

    // display the Linked List
    display(){
        let str = '';
        let node = this._head;

        while(node){
            str += node.data + ' -> ';
            node = node.next;
        }

        str += 'End';

        console.log(str);
    }
}

module.exports = SinglyLinkedList;
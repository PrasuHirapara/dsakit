/**
 * Node is the object which contains data and address of next node.
 * @returns - Object of class Node
 */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Circular Linked List is data stucture which store data in non continues locations in circular order.
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

class CircularLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    // insert at tail (default)
    insert(data) {
        const node = new Node(data);

        if (!this._head) {
            this._head = this._tail = node;
            this._tail.next = this._head;
        } else {
            this._tail.next = node;
            node.next = this._head;
            this._tail = node;
        }

        this._length++;
    }

    // insert at head
    insertAtHead(data) {
        const node = new Node(data);

        if (!this._head) {
            this._head = this._tail = node;
            this._tail.next = this._head;
        } else {
            node.next = this._head;
            this._tail.next = node;
            this._head = node;
        }

        this._length++;
    }

    // insert at index
    insertAtIndex(data, index) {
        if (index > this._length || index < 0) {
            return "Provide valid index";
        }

        const node = new Node(data);

        if (index === 0) {
            return this.insertAtHead(data);
        } else if (index === this._length) {
            return this.insert(data);
        } else {
            let i = 0;
            let temp = this._head;

            while (i !== index - 1) {
                temp = temp.next;
                i++;
            }

            node.next = temp.next;
            temp.next = node;

            this._length++;
        }
    }

    // remove from tail (default)
    remove() {
        let removed;

        if (!this._head) {
            return "Insert element first";
        } else if (this._length === 1) {
            removed = this._head.data;
            this._head = this._tail = null;
        } else {
            let temp = this._head;

            while (temp.next !== this._tail) {
                temp = temp.next;
            }

            removed = this._tail.data;
            temp.next = this._head;
            this._tail = temp;
        }

        this._length--;
        return removed;
    }

    // remove at head
    removeAtHead() {
        let removed;

        if (!this._head) {
            return "Insert element first";
        } else if (this._length === 1) {
            removed = this._head.data;
            this._head = this._tail = null;
        } else {
            removed = this._head.data;
            this._head = this._head.next;
            this._tail.next = this._head;
        }

        this._length--;
        return removed;
    }

    // remove at index (0-based index)
    removeAtIndex(index) {
        let removed;

        if (index < 0 || index >= this._length) {
            return "Invalid index.";
        } else if (index === 0) {
            return this.removeAtHead();
        } else if (index === this._length - 1) {
            return this.remove();
        } else {
            let i = 0;
            let temp = this._head;

            while (i < index - 1) {
                temp = temp.next;
                i++;
            }

            removed = temp.next.data;
            temp.next = temp.next.next;

            this._length--;
        }

        return removed;
    }

    // peek
    peek() {
        if (!this._head) {
            return "Insert element first";
        }

        return this._head.data;
    }

    // length
    length() {
        return this._length;
    }

    // contains
    contains(data) {
        if (!this._head) {
            return false;
        }

        let temp = this._head;

        do {
            if (temp.data === data) {
                return true;
            }
            temp = temp.next;
        } while (temp !== this._head);

        return false;
    }

    // indexOf
    indexOf(data) {
        if (!this._head) {
            return -1;
        }

        let index = 0;
        let temp = this._head;

        do {
            if (temp.data === data) {
                return index;
            }
            index++;
            temp = temp.next;
        } while (temp !== this._head);

        return -1;
    }

    // reverse
    reverse() {
        if (!this._head || this._length === 1) {
            return;
        }

        let prev = this._tail;
        let curr = this._head;
        let next;

        do {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        } while (curr !== this._head);

        this._tail = this._head;
        this._head = prev;
        this._tail.next = this._head;
    }

    // array to circular linked list
    fromArray(array) {
        if (array.length === 0) {
            return;
        }

        for (const item of array) {
            this.insert(item);
        }
    }

    // add one object to current object
    addAll(head2) {
        if (head2 === null) {
            return;
        }

        let temp = head2._head;
        do {
            this.insert(temp.data);
            temp = temp.next;
        } while (temp !== head2._head);
    }

    // display
    display() {
        let str = '';

        if (!this._head) {
            console.log("Insert element first");
        } else {
            let temp = this._head;

            do {
                str += (temp.data + ' -> ');
                temp = temp.next;
            } while (temp !== this._head);

            str += this._head.data;

            console.log(str);
        }
    }
}

module.exports = CircularLinkedList;
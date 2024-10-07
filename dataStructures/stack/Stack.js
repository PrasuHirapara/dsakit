/**
 * Stack is a data structure that follows the Last-In-First-Out (LIFO) strategy.
 * It is used to save values during processes and can retrieve them later.
 * It is commonly used in recursive function calls to store values.
 * 
 * @method push - Inserts data into the Stack.
 *              - Time complexity: O(1)
 * 
 * @method pop - Removes and returns the most recently pushed item.
 *             - Time complexity: O(1)
 * 
 * @method peek - Returns the last data inserted without removing it.
 *              - Time complexity: O(1)
 * 
 * @method fromArray - Adds all data of array into Stack data structure.
 *              - Time complexity: O(n)
 * 
 * @method size - Returns the number of items in the stack.
 *              - Time complexity: O(1)
 * 
 * @method clear - Clears all data in the stack.
 *               - Time complexity: O(1)
 * 
 * @method search - Searches for an item in the stack and returns its index.
 *                - Time complexity: O(n)
 * 
 * @method isEmpty - Returns true if the stack is empty.
 *                 - Time complexity: O(1)
 * 
 * @method isFull - Returns true if the stack is full.
 *                - Time complexity: O(1)
 * @returns - Object of cladd Stack.
 */

const _DEFAULTSIZE = 100;

class Stack {
    constructor(size = _DEFAULTSIZE) {
        this._size = size;
        this._top = -1;
        this._data = new Array(this._size);
    }

    // Insert an item
    push(val) {
        if (this.isFull()) {
            throw new Error("Stack overflow.");
        }
        this._data[++this._top] = val;
        return true;
    }

    // Remove the most recently inserted item
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        return this._data[this._top--];
    }

    // Return the top-most item without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        return this._data[this._top];
    }

    // array to Stack
    fromArray(array){
        if(array.length < 0){
            return;
        }

        for(const val of array){
            this.push(val);
        }
    }

    // Return the number of items in the stack
    size() {
        return this._top + 1;
    }

    // Clear all data from the stack
    clear() {
        this._data = new Array(this._size);
        this._top = -1;
    }

    // Search for an item in the stack
    search(data) {
        for (let i = 0; i <= this._top; i++) {
            if (this._data[i] === data) {
                return i;
            }
        }
        return -1;
    }

    // Return true if the stack is empty
    isEmpty() {
        return this._top === -1;
    }

    // Return true if the stack is full
    isFull() {
        return this._top === this._size - 1;
    }

    // display stack data
    display(){
        for(let i = this._top; i >= 0; i--){

            console.log(this._data[i]);
        }
    }
}

module.exports = Stack;
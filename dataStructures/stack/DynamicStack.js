/**
 * DynamicStack extends the Stack class, resizing automatically when full.
 * It follows the Last-In-First-Out (LIFO) principle and doubles its capacity 
 * to avoid overflow during push operations.
 * 
 * @extends Stack
 * 
 * @method push - Adds an element, resizing if necessary.
 *               - Time complexity: O(1) (amortized)
 * 
 * @method pop - Removes and returns the top item.
 *             - Time complexity: O(1)
 * 
 * @method peek - Returns the top item without removing it.
 *              - Time complexity: O(1)
 * 
 * @method size - Returns the number of elements in the stack.
 *              - Time complexity: O(1)
 * 
 * @method clear - Empties the stack.
 *               - Time complexity: O(1)
 * 
 * @method search - Searches for an item and returns its index.
 *                - Time complexity: O(n)
 * 
 * @method isEmpty - Returns true if the stack is empty.
 *                 - Time complexity: O(1)
 * 
 * @method isFull - Returns true if the stack is full.
 *                - Time complexity: O(1)
 
 * @returns - Object of cladd Stack.
 */

const Stack = require("./Stack");

class DynamicStack extends Stack {
    constructor(size) {
        super(size);
    }

    push(val) {
        if (this.isFull()) {
            let newData = new Array(2 * this._size);
            for (let i = 0; i <= this._top; i++) {
                newData[i] = this._data[i];
            }
            this._data = newData;
            this._size *= 2;
        }
        super.push(val);
    }
}

module.exports = DynamicStack;
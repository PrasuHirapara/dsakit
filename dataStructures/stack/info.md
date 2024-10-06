# Stack and DynamicStack Documentation

## Overview

This documentation covers the `Stack` and `DynamicStack` classes implemented in JavaScript. The `Stack` class follows the Last-In-First-Out (LIFO) principle, while the `DynamicStack` extends `Stack` with the ability to resize automatically when full.

## Stack Initialization

To initialize a standard stack, you can use the following code:

```javascript
const dsa = require('./index.js');

// Initialize a standard Stack
const stack = new dsa.Stack(size); // size is optional and defaults to 100
```

### Example Usage

```javascript
const dsa = require('./index.js');

// Create a new Stack
const stack = new dsa.Stack();

// Push elements
stack.push(10);
stack.push(20);
stack.push(30);

// Peek the top element
console.log(stack.peek()); // Output: 30

// Pop an element
console.log(stack.pop()); // Output: 30

// Check if the stack is empty
console.log(stack.isEmpty()); // Output: false

// Display all elements in the stack
stack.display(); // Displays the current elements in the stack
```

## DynamicStack Initialization

To initialize a dynamic stack, use the following code:

```javascript
const dsa = require('./index.js');

// Initialize a DynamicStack
const dynamicStack = new dsa.DynamicStack(size); // size is optional and defaults to 100
```

### Example Usage

```javascript
const dsa = require('./index.js');

let arr = [36, 56, 16, -232456, 913, 3658, 34, 43, 43, 5, 5, 6, 7];

// Create a new DynamicStack
const stack = new dsa.DynamicStack();

// Optionally populate the stack from an array
stack.fromArray(arr);

// Peek the top element
console.log(stack.peek()); // Output: 7
```

## Methods Overview

### Stack Methods

- **push(val)**: Adds an element to the stack.
- **pop()**: Removes and returns the top item.
- **peek()**: Returns the top item without removing it.
- **size()**: Returns the number of elements in the stack.
- **clear()**: Empties the stack.
- **search(data)**: Searches for an item and returns its index.
- **isEmpty()**: Returns true if the stack is empty.
- **isFull()**: Returns true if the stack is full.

### DynamicStack Methods

Inherits all methods from `Stack` with the addition of:

- **push(val)**: Resizes the stack if full before adding an element.

## Conclusion

Both `Stack` and `DynamicStack` provide essential functionalities for managing data in a Last-In-First-Out manner. The `DynamicStack` enhances this functionality by allowing for automatic resizing, making it suitable for scenarios where the number of elements is not predetermined.

For further details, refer to the individual class implementations in the code.
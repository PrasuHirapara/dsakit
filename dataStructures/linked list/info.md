
# Linked List Overview

A linked list is a linear data structure where elements, called nodes, are linked using pointers. Each node contains data and a reference (or link) to the next node in the sequence. Linked lists offer dynamic memory usage and efficient insertion or deletion of nodes.

## Types of Linked Lists
- **Singly Linked List**: Each node points to the next node in the list.
- **Doubly Linked List**: Each node points to both the next and previous nodes, allowing traversal in both directions.
- **Circular Linked List**: The last node points back to the first node, forming a circular structure.

## Methods and Code Examples

### `insert` - Insert at tail
Inserts a new element at the end of the list.

```javascript
ll.insert(10);
```

### `insertAtHead` - Insert at head
Inserts a new element at the start of the list.

```javascript
ll.insertAtHead(20);
```

### `insertAtIndex` - Insert at specific index
Inserts an element at a specified index in the list.

```javascript
ll.insertAtIndex(2, 30);
```

### `remove` - Remove from tail
Removes the last element of the list.

```javascript
ll.remove();
```

### `removeAtHead` - Remove from head
Removes the first element of the list.

```javascript
ll.removeAtHead();
```

### `removeAtIndex` - Remove from specific index
Removes an element at a specified index.

```javascript
ll.removeAtIndex(3);
```

### `peek` - Return peek element
Returns the element at the end of the list.

```javascript
let peekValue = ll.peek();
```

### `length` - Return list length
Returns the total number of elements in the list.

```javascript
let listLength = ll.length();
```

### `contains` - Check if data exists
Checks if a specified element exists in the list.

```javascript
let hasValue = ll.contains(25);
```

### `indexOf` - Get index of data
Returns the index of a specified element if present, else returns -1.

```javascript
let index = ll.indexOf(30);
```

### `reverse` - Reverse the list
Reverses the list in place.

```javascript
ll.reverse();
```

### `fromArray` - Add array values
Converts an array into linked list elements and appends them.

```javascript
ll.fromArray([10, 20, 30, 40]);
```

### `addAll` - Merge with other list
Adds all elements of another list to the current list.

```javascript
let otherList = new dsa.SinglyLinkedList();
otherList.insert(100);
ll.addAll(otherList);
```

### `display` - Print list
Prints all elements of the list.

```javascript
ll.display();
```

## Full Code Example

```javascript
const dsa = require('./index.js');

let ll = new dsa.SinglyLinkedList();

ll.insert(1);
ll.fromArray([2,3,4,5,6]);
ll.display();
ll.removeAtIndex(5);
ll.display();
```

# DSAKIT

DSAKIT is a JavaScript project offering a comprehensive library of data structures and algorithms. It includes sorting, searching, advanced arrays, tries, graphs, stacks, queues, linked lists, and more—providing efficient solutions for common DSA problems.

## Installation

```sh
npm install dsakit
```

## Usage

### Steps to Use
1. **Require the dependency**
2. **Create an object of the required data structure or call the function for algorithms**
3. **Use the provided methods**

### Example

```javascript
const dsakit = require("dsakit");

const stack = new dsakit.Stack(); // Data Structure (Class)
stack.push(10);
stack.push(20);

console.log("Popped:", stack.pop());

const sortedArray = dsakit.quickSort([5, 3, 8, 4]); // Algorithm (Function)
console.log("Sorted Array:", sortedArray);
```

## Available Modules

| Category (Type)       | Classes (Data Structures) / Functions (Algorithms) |
|----------------------|------------------------------------------------|
| **Stack (Class)**       | `Stack`, `DynamicStack` |
| **Queue (Class)**       | `Queue`, `PriorityQueue`, `Deque` |
| **Linked List (Class)** | `SinglyLinkedList`, `DoublyLinkedList`, `CircularLinkedList` |
| **Graph (Class & Function)** | `DirectedGraph` (Class), `UnDirectedGraph` (Class), `WeightedGraph` (Class), `dijkstra` (Function) |
| **Tree (Class)**        | `BinaryTree`, `BinarySearchTree`, `AVL_Tree`, `B_Tree`, `N_Ary_Tree`, `GeneralTree`, `HeapTree`, `RedBlackTree`, `SegmentTree`, `TrieTree` |
| **Sorting (Function - In-Place Sorts)**     | `bubbleSort`, `countingSort`, `cyclicSort`, `heapSort`, `insertionSort`, `mergeSort`, `quickSort`, `radixSort`, `selectionSort`, `timSort` |
| **Searching (Function)**   | `binarySearch`, `sequentialSearch` |
| **String Matching (Function)** | `stringMatching` |
| **Matrix (Function)**      | `matrixMultiplication`, `chainMatrixMultiplication` |
| **Greedy Algorithms (Function)** | `makingChange` |
| **Dynamic Programming (Function)** | `knapsack`, `floydWarshall` |

For more details on each topic, check the respective `info.md` file in the repository: [DSAKIT Repository](https://github.com/PrasuHirapara/dsakit).

/**
 * HeapTree implementation for efficient priority queue operations and heap-specific traversals.
 *
 * A HeapTree is used for implementing heap operations such as insertion, deletion,
 * and fetching the minimum or maximum element depending on the type of heap (min-heap or max-heap).
 * This implementation includes:
 *
 * - Efficient insertion and deletion operations to maintain heap properties.
 * - Support for min-heap or max-heap behavior.
 * - Traversal methods (BFS, in-order, pre-order, post-order).
 *
 * - insert(value): Inserts a new value into the heap while maintaining heap properties.
 * - extract(): Removes and returns the root value (min or max based on heap type).
 * - peek(): Returns the root value without removing it.
 * - bfs(): Returns a level-order (BFS) traversal of the heap.
 * - inOrder(): Returns an in-order traversal of the heap.
 * - preOrder(): Returns a pre-order traversal of the heap.
 * - postOrder(): Returns a post-order traversal of the heap.
 */

class Node {
    constructor(value = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class HeapTree {
    constructor(isMinHeap = true) {
        this.isMinHeap = isMinHeap; // True for min-heap, false for max-heap
        this.heap = [];
        this.root = null;
    }

    compare(parent, child) {
        return this.isMinHeap ? parent > child : parent < child;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.insertIntoTree(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.compare(this.heap[parentIndex], this.heap[index])) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extract() {
        if (this.heap.length === 0) return null;
        const rootValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return rootValue;
    }

    heapifyDown(index) {
        const size = this.heap.length;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let extreme = index;

        if (leftChild < size && this.compare(this.heap[extreme], this.heap[leftChild])) {
            extreme = leftChild;
        }

        if (rightChild < size && this.compare(this.heap[extreme], this.heap[rightChild])) {
            extreme = rightChild;
        }

        if (extreme !== index) {
            this.swap(index, extreme);
            this.heapifyDown(extreme);
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    insertIntoTree(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                return;
            } else if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }

    bfs() {
        if (!this.root) return [];

        const result = [];
        const queue = [this.root];

        while (queue.length) {
            const current = queue.shift();
            result.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return result;
    }

    inOrder() {
        const result = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    preOrder() {
        const result = [];
        const traverse = (node) => {
            if (node) {
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    postOrder() {
        const result = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                traverse(node.right);
                result.push(node.value);
            }
        };
        traverse(this.root);
        return result;
    }
}

module.exports = HeapTree;
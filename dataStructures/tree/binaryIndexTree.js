/**
 * BinaryIndexedTree (Fenwick Tree) implementation for efficient prefix sum and range queries.
 * 
 *  A Binary Indexed Tree is used for efficient range queries and updates 
 * on prefix sums of an array. This implementation includes:
 * 
 * - Efficient prefix and range sum computations.
 * - Update operations to modify values in the tree.
 * - Tree traversal methods (BFS, in-order, pre-order, post-order).
 * 
 * - construct(arr): Constructs the Binary Indexed Tree from an array.
 * - update(index, value): Updates the BIT by adding a value to a specific index.
 * - prefixSum(index): Returns the sum of elements from index 1 to the given index.
 * - rangeSum(left, right): Returns the sum of elements in the range [left, right].
 * - insert(index, value): Inserts a new node into the binary tree representation.
 * - bfs(): Returns a level-order (BFS) traversal of the binary tree.
 * - inOrder(): Returns an in-order traversal of the binary tree.
 * - preOrder(): Returns a pre-order traversal of the binary tree.
 * - postOrder(): Returns a post-order traversal of the binary tree.
 */

class Node {
    constructor(index = null, value = 0) {
        this.index = index;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryIndexedTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
        this.root = null;
    }

    construct(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.update(i + 1, arr[i]);
            this.insert(i + 1, arr[i]);
        }
    }

    update(index, value) {
        while (index <= this.size) {
            this.tree[index] += value;
            index += index & -index;
        }
    }

    prefixSum(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }

    rangeSum(left, right) {
        return this.prefixSum(right) - this.prefixSum(left - 1);
    }

    insert(index, value) {
        if (!this.root) {
            this.root = new Node(index, value);
            return;
        }

        let temp = this.root;
        while (true) {
            if (index < temp.index) {
                if (!temp.left) {
                    temp.left = new Node(index, value);
                    return;
                }
                temp = temp.left;
            } else {
                if (!temp.right) {
                    temp.right = new Node(index, value);
                    return;
                }
                temp = temp.right;
            }
        }
    }

    bfs() {
        if (!this.root) return [];

        const result = [];
        const queue = [this.root];

        while (queue.length) {
            const current = queue.shift();
            result.push({ index: current.index, value: current.value });

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
                result.push({ index: node.index, value: node.value });
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
                result.push({ index: node.index, value: node.value });
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
                result.push({ index: node.index, value: node.value });
            }
        };
        traverse(this.root);
        return result;
    }
}

module.exports = BinaryIndexedTree;
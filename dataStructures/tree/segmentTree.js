/**
 * SegmentTree implementation for efficient range queries and point updates.
 *
 * A Segment Tree is used for storing information about intervals and performing
 * queries like range sum, range minimum, etc., efficiently.
 * This implementation includes:
 *
 * - Building the tree from an array.
 * - Querying for range sums.
 * - Updating a value at a specific index.
 * - Traversal methods (BFS, in-order, pre-order, post-order).
 *
 * - build(arr): Constructs the Segment Tree from an array.
 * - update(index, value): Updates a value in the Segment Tree.
 * - rangeQuery(left, right): Returns the sum of elements in the range [left, right].
 * - bfs(): Returns a level-order (BFS) traversal of the segment tree.
 * - inOrder(): Returns an in-order traversal of the segment tree.
 * - preOrder(): Returns a pre-order traversal of the segment tree.
 * - postOrder(): Returns a post-order traversal of the segment tree.
 */

class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n).fill(0);
        this.build(arr, 0, 0, this.n - 1);
    }

    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            const leftChild = 2 * node + 1;
            const rightChild = 2 * node + 2;

            this.build(arr, leftChild, start, mid);
            this.build(arr, rightChild, mid + 1, end);

            this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
        }
    }

    update(index, value, node = 0, start = 0, end = this.n - 1) {
        if (start === end) {
            this.tree[node] = value;
        } else {
            const mid = Math.floor((start + end) / 2);
            const leftChild = 2 * node + 1;
            const rightChild = 2 * node + 2;

            if (index <= mid) {
                this.update(index, value, leftChild, start, mid);
            } else {
                this.update(index, value, rightChild, mid + 1, end);
            }

            this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
        }
    }

    rangeQuery(left, right, node = 0, start = 0, end = this.n - 1) {
        if (left > end || right < start) {
            return 0; // Out of range
        }

        if (left <= start && end <= right) {
            return this.tree[node];
        }

        const mid = Math.floor((start + end) / 2);
        const leftChild = 2 * node + 1;
        const rightChild = 2 * node + 2;

        const leftSum = this.rangeQuery(left, right, leftChild, start, mid);
        const rightSum = this.rangeQuery(left, right, rightChild, mid + 1, end);

        return leftSum + rightSum;
    }

    bfs() {
        const result = [];
        const queue = [0];

        while (queue.length) {
            const current = queue.shift();
            result.push(this.tree[current]);

            const leftChild = 2 * current + 1;
            const rightChild = 2 * current + 2;

            if (leftChild < this.tree.length && this.tree[leftChild] !== 0) {
                queue.push(leftChild);
            }

            if (rightChild < this.tree.length && this.tree[rightChild] !== 0) {
                queue.push(rightChild);
            }
        }

        return result;
    }

    inOrder(node = 0, start = 0, end = this.n - 1) {
        const result = [];
        const traverse = (node, start, end) => {
            if (start === end) {
                result.push(this.tree[node]);
                return;
            }

            const mid = Math.floor((start + end) / 2);
            const leftChild = 2 * node + 1;
            const rightChild = 2 * node + 2;

            traverse(leftChild, start, mid);
            result.push(this.tree[node]);
            traverse(rightChild, mid + 1, end);
        };

        traverse(node, start, end);
        return result;
    }

    preOrder(node = 0, start = 0, end = this.n - 1) {
        const result = [];
        const traverse = (node, start, end) => {
            result.push(this.tree[node]);

            if (start === end) return;

            const mid = Math.floor((start + end) / 2);
            const leftChild = 2 * node + 1;
            const rightChild = 2 * node + 2;

            traverse(leftChild, start, mid);
            traverse(rightChild, mid + 1, end);
        };

        traverse(node, start, end);
        return result;
    }

    postOrder(node = 0, start = 0, end = this.n - 1) {
        const result = [];
        const traverse = (node, start, end) => {
            if (start === end) {
                result.push(this.tree[node]);
                return;
            }

            const mid = Math.floor((start + end) / 2);
            const leftChild = 2 * node + 1;
            const rightChild = 2 * node + 2;

            traverse(leftChild, start, mid);
            traverse(rightChild, mid + 1, end);
            result.push(this.tree[node]);
        };

        traverse(node, start, end);
        return result;
    }
}

module.exports = SegmentTree;
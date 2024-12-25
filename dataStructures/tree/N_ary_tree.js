/**
 * N-ary Tree implementation for managing tree structures with multiple children.
 *
 * An N-ary Tree is a generalization of a binary tree where each node can have
 * up to N children. This implementation includes:
 *
 * - Insert nodes with parent-child relationships.
 * - Traverse the tree using BFS, DFS (pre-order, in-order, post-order).
 * - Search for a node by value.
 * - Count total nodes in the tree.
 * - Find the height of the tree.
 * - Find all leaf nodes.
 * - Remove a node and its subtree.
 *
 * - insert(parentValue, value): Inserts a new node as a child of a given parent.
 * - bfs(): Performs a level-order (BFS) traversal of the tree.
 * - preOrder(): Performs a pre-order DFS traversal.
 * - postOrder(): Performs a post-order DFS traversal.
 * - search(value): Searches for a node with the given value.
 * - countNodes(): Counts the total number of nodes in the tree.
 * - height(): Finds the height of the tree.
 * - findLeaves(): Returns all the leaf nodes.
 * - remove(value): Removes a node and its subtree from the tree.
 */

class NaryTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class NaryTree {
    constructor(rootValue) {
        this.root = new NaryTreeNode(rootValue);
    }

    insert(parentValue, value) {
        const parentNode = this.search(parentValue);

        if (!parentNode) {
            throw new Error(`Parent node with value ${parentValue} not found.`);
        }

        parentNode.children.push(new NaryTreeNode(value));
    }

    bfs() {
        if (!this.root) return [];

        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.value);

            for (const child of current.children) {
                queue.push(child);
            }
        }

        return result;
    }

    preOrder(node = this.root, result = []) {
        if (!node) return result;

        result.push(node.value);

        for (const child of node.children) {
            this.preOrder(child, result);
        }

        return result;
    }

    postOrder(node = this.root, result = []) {
        if (!node) return result;

        for (const child of node.children) {
            this.postOrder(child, result);
        }

        result.push(node.value);

        return result;
    }

    search(value) {
        if (!this.root) return null;

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current.value === value) {
                return current;
            }

            for (const child of current.children) {
                queue.push(child);
            }
        }

        return null;
    }

    countNodes(node = this.root) {
        if (!node) return 0;

        let count = 1;

        for (const child of node.children) {
            count += this.countNodes(child);
        }

        return count;
    }

    height(node = this.root) {
        if (!node) return 0;

        let maxHeight = 0;

        for (const child of node.children) {
            maxHeight = Math.max(maxHeight, this.height(child));
        }

        return 1 + maxHeight;
    }

    findLeaves(node = this.root, leaves = []) {
        if (!node) return leaves;

        if (node.children.length === 0) {
            leaves.push(node.value);
        }

        for (const child of node.children) {
            this.findLeaves(child, leaves);
        }

        return leaves;
    }

    remove(value) {
        if (!this.root) return;

        if (this.root.value === value) {
            this.root = null;
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            for (let i = 0; i < current.children.length; i++) {
                if (current.children[i].value === value) {
                    current.children.splice(i, 1);
                    return;
                }

                queue.push(current.children[i]);
            }
        }

        throw new Error(`Node with value ${value} not found.`);
    }
}

module.exports = NaryTree;
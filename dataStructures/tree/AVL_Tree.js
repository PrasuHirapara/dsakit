/**
 * AVLTree is a self-balancing binary search tree where the height difference between left and right subtrees 
 * (balance factor) is at most 1. It ensures O(log n) time complexity for insertions, deletions, and searches.
 *
 * Methods:
 *
 * @method insert(data) - Inserts a node with the given data into the AVL tree and maintains balance.
 *                        Time Complexity: O(log n)
 *
 * @method delete(data) - Deletes a node with the given data and rebalances the tree.
 *                        Time Complexity: O(log n)
 *
 * @method contains(data) - Checks if a node with the given data exists in the tree.
 *                          Time Complexity: O(log n)
 *
 * @method fromArray(arr) - Inserts all elements from an array into the AVL tree.
 *                          Time Complexity: O(n log n)
 *
 * @method bfs() - Performs Breadth-First Search and returns the elements in level-order.
 *                 Time Complexity: O(n)
 *
 * @method dfs() - Performs Depth-First Search (pre-order) and returns the elements.
 *                 Time Complexity: O(n)
 *
 * @method inOrder() - Performs in-order traversal and returns the elements as an array.
 *                     Time Complexity: O(n)
 *
 * @method preOrder() - Performs pre-order traversal and returns the elements as an array.
 *                      Time Complexity: O(n)
 *
 * @method postOrder() - Performs post-order traversal and returns the elements as an array.
 *                       Time Complexity: O(n)
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        return node ? node.height : 0;
    }

    getBalanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));

        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));

        return y;
    }

    insert(data) {
        const insertNode = (node, data) => {
            if (!node) {
                return new Node(data);
            }

            if (data < node.data) {
                node.left = insertNode(node.left, data);
            } else if (data > node.data) {
                node.right = insertNode(node.right, data);
            } else {
                return node;
            }

            node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

            let balance = this.getBalanceFactor(node);

            if (balance > 1 && data < node.left.data) {
                return this.rightRotate(node);
            }

            if (balance < -1 && data > node.right.data) {
                return this.leftRotate(node);
            }

            if (balance > 1 && data > node.left.data) {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }

            if (balance < -1 && data < node.right.data) {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }

            return node;
        };

        this.root = insertNode(this.root, data);
    }

    fromArray(arr) {
        if (!Array.isArray(arr)) return;

        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i]);
        }
    }

    bfs() {
        const result = [];
        const queue = [];

        if (this.root) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node.data);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }

    dfs() {
        const result = [];
        const stack = [];

        if (this.root) {
            stack.push(this.root);
        }

        while (stack.length > 0) {
            let node = stack.pop();
            result.push(node.data);

            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }

        return result;
    }

    inOrder() {
        const result = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                result.push(node.data);
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
                result.push(node.data);
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
                result.push(node.data);
            }
        };
        traverse(this.root);
        return result;
    }

    contains(data) {
        const search = (node, data) => {
            if (!node){
                return false;
            }
            if (data === node.data) {
                return true;
            }

            return data < node.data ? search(node.left, data) : search(node.right, data);
        };
        
        return search(this.root, data);
    }
}

module.exports = AVLTree;
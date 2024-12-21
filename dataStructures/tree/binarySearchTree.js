/**
 * BinaryIndexedTree (Fenwick Tree) is a data structure for efficiently managing cumulative frequency tables or prefix sums.
 * It allows updates and queries of prefix sums in logarithmic time.
 *
 * Methods:
 * 
 * @method construct - Constructs the Binary Indexed Tree from an array.
 *                          Time Complexity: O(n log n), where n is the size of the array.
 *
 * @method update - Updates the BIT by adding a value to a specific index.
 *                                Time Complexity: O(log n)
 *
 * @method prefixSum - Returns the sum of elements from index 1 to the given index.
 *                            Time Complexity: O(log n)
 *
 * @method rangeSum - Returns the sum of elements in the range [left, right].
 *                                 Time Complexity: O(log n)
 *
 * @method insert - Inserts a new node into the binary tree representation.
 *                                Time Complexity: O(log n)
 *
 * @method bfs - Performs Breadth-First Search (level-order traversal) on the binary tree representation.
 *                 Time Complexity: O(n), where n is the number of nodes in the tree.
 *
 * @method inOrder - Performs in-order traversal on the binary tree representation.
 *                     Time Complexity: O(n)
 *
 * @method preOrder - Performs pre-order traversal on the binary tree representation.
 *                      Time Complexity: O(n)
 *
 * @method postOrder - Performs post-order traversal on the binary tree representation.
 *                       Time Complexity: O(n)
 */

class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(showSteps = false) {
        this.root = null;
        this.showSteps = showSteps;
    }

    insert(data) {
        if (!data) {
            console.log("Provide valid input");
            return;
        }

        const node = new Node(data);

        if (this.root === null) {
            this.root = node;
            return;
        }

        let temp = this.root;
        while (true) {
            if (data < temp.data) {
                if (temp.left === null) {
                    temp.left = node;
                    return;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = node;
                    return;
                }
                temp = temp.right;
            }
        }
    }

    fromArray(arr = null) {
        if (!Array.isArray(arr)) {
            console.log("Provide a valid array");
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i]);
        }
    }

    bfs() {
        let result = [];
        let queue = [];
    
        if (this.root !== null) {
            queue.push(this.root);
        }
    
        while (queue.length > 0) {
            let temp = queue.shift();
            result.push(temp.data);
    
            if (temp.left !== null) {
                queue.push(temp.left);
            }
    
            if (temp.right !== null) {
                queue.push(temp.right);
            }
        }
    
        return result;
    }

    dfs() {
        let result = [];
        let stack = [];
    
        if (this.root !== null) {
            stack.push(this.root);
        }
    
        while (stack.length !== 0) {
            let temp = stack.pop();
            result.push(temp.data);
    
            if (temp.right !== null) {
                stack.push(temp.right);
            }
    
            if (temp.left !== null) {
                stack.push(temp.left);
            }
        }
    
        return result;
    }

    getLevel() {
        if (this.root === null) {
            return 0;
        }
    
        let queue = [{ node: this.root, level: 1 }];
        let maxLevel = 0;
    
        while (queue.length > 0) {
            let { node, level } = queue.shift();
            maxLevel = Math.max(maxLevel, level);
    
            if (node.left !== null) {
                queue.push({ node: node.left, level: level + 1 });
            }
    
            if (node.right !== null) {
                queue.push({ node: node.right, level: level + 1 });
            }
        }
    
        return maxLevel;
    }

    isSymmetric() {
        if (!this.root) return true;

        const isMirror = (node1, node2) => {
            if (!node1 && !node2) return true;
            if (!node1 || !node2) return false;
            return node1.data === node2.data &&
                isMirror(node1.left, node2.right) &&
                isMirror(node1.right, node2.left);
        };

        return isMirror(this.root.left, this.root.right);
    }

    height(node) {
        if (!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    };

    isBalanced() {
        if (!this.root) return true;

        const checkBalance = (node) => {
            if (!node) {
                return true;
            }
            let leftHeight = this.height(node.left);
            let rightHeight = this.height(node.right);

            return Math.abs(leftHeight - rightHeight) <= 1 && checkBalance(node.left) && checkBalance(node.right);
        };

        return checkBalance(this.root);
    }

    contains(data) {
        let temp = this.root;
        while (temp) {
            if (data === temp.data) return true;
            if (data < temp.data) temp = temp.left;
            else temp = temp.right;
        }
        return false;
    }

    isCompleteBinaryTree() {
        if (!this.root) return true;

        let queue = [this.root];
        let flag = false;

        while (queue.length) {
            let temp = queue.shift();

            if (temp.left) {
                if (flag) return false;
                queue.push(temp.left);
            } else {
                flag = true;
            }

            if (temp.right) {
                if (flag) return false;
                queue.push(temp.right);
            } else {
                flag = true;
            }
        }

        return true;
    }

    inOrder() {
        const result = [];
        const inOrderTraversal = (node) => {
            if (node) {
                inOrderTraversal(node.left);
                result.push(node.data);
                inOrderTraversal(node.right);
            }
        };

        inOrderTraversal(this.root);
        return result;
    }

    preOrder() {
        const result = [];
        const preOrderTraversal = (node) => {
            if (node) {
                result.push(node.data);
                preOrderTraversal(node.left);
                preOrderTraversal(node.right);
            }
        };

        preOrderTraversal(this.root);
        return result;
    }

    postOrder() {
        const result = [];
        const postOrderTraversal = (node) => {
            if (node) {
                postOrderTraversal(node.left);
                postOrderTraversal(node.right);
                result.push(node.data);
            }
        };

        postOrderTraversal(this.root);
        return result;
    }

    findParentNode(data) {
        if (!this.root || this.root.data === data) {
            return null;
        }

        let queue = [this.root];
        while (queue.length) {
            let temp = queue.shift();

            if ((temp.left && temp.left.data === data) || (temp.right && temp.right.data === data)) {
                return temp;
            }

            if (temp.left){
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }

        return null;
    }

    add(data) {
        if (this.contains(data)) {
            console.log("Node already exists");
            return;
        }

        this.insert(data);
    }

    construct(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.update(i + 1, arr[i]);
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
}


module.exports = BinarySearchTree;

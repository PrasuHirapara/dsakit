/**
 * BinaryTree is a data structure that represents a binary tree, where each node has at most two children (left and right).
 * It consists of nodes containing data and references to left and right child nodes.
 *
 * @class BinaryTree
 * @description A class representing a binary tree structure with methods for interacting with the tree (adding/removing nodes, displaying structure, traversing, etc.).
 * 
 * @method buildTree - Interactively builds the tree starting from the root node. It prompts for the root node data and recursively adds left and right child nodes.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method createNode - Creates a new node with the specified data, initializing left and right children to null.
 *                     - Time Complexity: O(1)
 *
 * @method addChildren - Recursively adds left and right children to the node interactively by prompting the user for input.
 *                       - Time Complexity: O(n), where n is the total number of nodes being added.
 *
 * @method printTree - Prints the tree structure in a visually readable format with indentation for each level.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method printNode - Recursively prints each node and its descendants, displaying hierarchical structure using indentation.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method findNode - Searches for a node with the specified data in the tree and returns it if found.
 *                   - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method contains - Checks if a node with the specified data exists in the tree.
 *                   - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method removeNode - Removes the specified node and its entire subtree. If the node is the root, it is replaced with the deepest node.
 *                     - Time Complexity: O(n), as it may require traversing the tree to locate and delete the node.
 *
 * @method findParent - Finds the parent node of the node with the specified data by traversing the tree.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method depth - Computes the depth (or height) of the tree, which is the longest path from the root to a leaf node.
 *                - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method isBalanced - Checks if the tree is balanced, i.e., the depths of the left and right subtrees differ by no more than one.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method isSymmetric - Checks if the tree is symmetric (a mirror of itself).
 *                      - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method isFullBinaryTree - Checks if the tree is a full binary tree, where every node has either 0 or 2 children.
 *                            - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method isCompleteBinaryTree - Checks if the tree is a complete binary tree, i.e., all levels are fully filled except possibly the last.
 *                                - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method postOrderTraversal - Performs a post-order traversal of the tree (left -> right -> root) and outputs the node data.
 *                             - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method inOrderTraversal - Performs an in-order traversal of the tree (left -> root -> right) and outputs the node data.
 *                           - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method preOrderTraversal - Performs a pre-order traversal of the tree (root -> left -> right) and outputs the node data.
 *                            - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @returns {BinaryTree} - An object of the BinaryTree class that represents the tree structure and provides methods for interacting with it.
*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class BinaryTree {

    constructor(showSteps = false) {
        this.root = null;
        this.showSteps = showSteps;
    }

    buildTree() {

            this.logStep("Step 1: Building tree...");
            r1.question("Enter root node data:  ", (rootData) => {
                if (!rootData) {
                    console.log("Please enter root node data. Without it, tree can not be created.");
                    r1.close();
                    return;
                }

                this.logStep(`Step 2: Root node '${rootData}' has been created.`);
                this.root = this.createNode(rootData);
                this.addChildren(this.root, () => {
                    this.logStep("Step 3: Tree has been created.");
                    this.printTree();
                    r1.close();
                });
            });
    }

    createNode(data) {
        this.logStep(`Creating node with data: '${data}'`);
        return { data, left: null, right: null };
    }

    addChildren(node, callback) {

        r1.question(`Enter left child for '${node.data}' or enter '0' if no left.`, (leftData) => {

            if (leftData !== "" && isNaN(leftData)) {
                console.log("Please enter a valid number for the child node.");
                return this.addChildren(node, callback); // Re-ask for input
            } 

            if (leftData && leftData !== "0") {
                const leftChild = this.createNode(leftData);
                node.left = leftChild;

                this.logStep(`Added left child '${leftData}' to node '${node.data}'.`);

                this.addChildren(leftChild, () => {

                    // Build right subtree after left subtree is completed
                    r1.question(`Enter right child for '${node.data}' or leave blank.`, (rightData) => {

                        if (rightData !== "" && isNaN(rightData)) {
                            console.log("Please enter a valid number or '0'.");
                            return this.addChildren(node, callback); // Re-ask for input
                        }
                        if (rightData && rightData !== "0") {
                            const rightChild = this.createNode(rightData);
                            node.right = rightChild;

                            this.logStep(`Added right child '${rightData}' to node '${node.data}'`);
                            this.addChildren(rightChild, callback);
                        } else {
                            callback(); // Recursion end if no right child
                        }
                    });
                });
            } else {
                r1.question(`Enter right child for '${node.data}' or '0' if no right data.`, (rightData) => {

                    if (rightData !== "" && isNaN(rightData)) {
                        console.log("Please enter a valid number or '0'.");
                        return this.addChildren(node, callback); // Re-ask for input
                    }
                    if (rightData && rightData !== "0") {
                        const rightChild = this.createNode(rightData);
                        node.right = rightChild;

                        this.logStep(`Added right child '${rightData}' to node '${node.data}'`);
                        this.addChildren(rightChild, callback);
                    } else {
                        callback(); // Recursion end if no right child
                    }
                });
            }
        });
    }

    printTree() {
        if (!this.root) {
            console.log("Trees is empty.");
            return;
        }

        this.logStep("Step 4: Printing the tree structure...");
        this.printNode(this.root, 0);
    }

    printNode(node, level) {

        if(!node) return;

        console.log(" ".repeat(level * 4) + `├── ${node.data}`);
        this.printNode(node.left, level + 1);
        this.printNode(node.right, level + 1);
    }

    logStep(message) {
        if (this.showSteps) {
            console.log(message);
        }
    }

    findNode(data, node = this.root) {
        if (!node) {
            return null;
        }

        if (node.data === data) return data;

        return this.findNode(data, node.left) || this.findNode(data, node.right);
    }

    contains(data) {
        return this.findNode(data) !== null;
    }

    depth(node = this.root) {
        if (!node) return 0;

        const leftDepth = this.depth(node.left);
        const rightDepth = this.depth(node.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    removeNode(data) {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }

        if (data === this.root.data) {
            if (!this.root.left && !this.root.right) {
                this.root = null;
            } else {
                const deepestNode = this.findDeepestNode();
                this.root.data = deepestNode.data;
                this.deleteDeepestNode();
            }

            console.log("Root node removed.");
            return;
        }

        const parent = this.findParent(data, this.root);
        if (!parent) {
            console.log(`Node with '${data} not found'`);
        }

        // find the target node
        const target = parent.left && parent.left.data === data ? "left" : "right";
        const targetNode = parent[target];

        if (!targetNode.left && !targetNode.right) {
            parent[target] = null;
            console.log(`Node with data '${data} removed (It has no children.)`);
        } else if (targetNode.left && !targetNode.right) {
            parent[target] = targetNode.left;
            console.log(`Node with data '${data}' reomoved (left child promoted).`)
        } else if (!targetNode.left && targetNode.right) {
            parent[target] = targetNode.right;
            console.log(`Node with data '${data}' removed (right child promoted).`)
        } else {

            const deepestNode = this.findDeepestNode();
            targetNode.data = deepestNode.data;
            this.deleteDeepestNode();
            console.log(`Node with data '${data}' removed (replaced by deepes node)`);
        }
    }

    findParent(data, node) {
        if (!node) return null;

        if (node.left && node.left.data === data) {
            return node;
        }

        if (node.right && node.right.data === data) {
            return node;
        }

        return this.findParent(data, node.left) || this.findParent(data, node.right);
    }

    findDeepestNode() {
        if (!this.root) return null;

        const queue = [this.root];
        let node = null;

        while (queue.length > 0) {
            node = queue.shift(); // visit current node
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return node;
    }

    deleteDeepestNode() {
        if (!this.root) return null;

        const queue = [this.root];
        let prevNode = null;
        let node = null;

        while (queue.length > 0) {
            prevNode = node;
            node = queue.shift();

            if (node.left) {
                if (!node.left.left && !node.left.right) {
                    // If the left child is a leaf node, delete it
                    node.left = null;
                    return;
                }

                queue.push(node.left);
            }

            if (node.right) {
                if (!node.right.left && !node.right.right) {
                    // If the right child is a leaf node, delete it
                    node.right = null;
                    return;
                }
                queue.push(node.right);
            }
        }
    }

    postOrderTraversal(node = this.root) {
        if (!node) {
            return;
        }

        // left -> right -> root
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
    }

    inOrderTraversal(node = this.root) {
        if (!node) {
            return;
        }

        // left -> root -> right
        this.inOrderTraversal(node.left);
        console.log(node.data + " ");
        this.inOrderTraversal(node.right);
    }

    preOrderTraversal(node = this.root) {
        if (!node) {
            return;
        }

        // root -> left -> right
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    isBalanced(node = this.root) {
        if (!node) return null;

        const leftDepth = this.depth(node.left);
        const rightDepth = this.depth(node.right);

        return Math.abs(leftDepth - rightDepth) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    isSymmetric() {
        const isMirror = (node1, node2) => {
            if (!node1 && !node2) {
                return true;
            }

            if (!node1 || !node2) {
                return false;
            }

            return node1.data === node2.data && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
        };

        return isMirror(this.root, this.root);
    }

    isFullBinaryTree(node = this.root) {
        if (!node) {
            return true;
        }

        if ((!node.left && node.right) || (node.left && !node.right)) {
            return false;
        }

        return this.isFullBinaryTree(node.left) && this.isFullBinaryTree(node.right);
    }

    isCompleteBinaryTree() {
        if (!this.root) return true;

        const queue = [this.root];
        let foundNull = false;
        while (queue.length) {
            const node = queue.shift();

            if (!node) {
                foundNull = true;
            } else {
                if (foundNull) return false;
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        return true;
    }
}

module.exports = BinaryTree;
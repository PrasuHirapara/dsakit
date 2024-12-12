/**
 * GeneralTree is a data structure that represents a hierarchical tree where each node can have multiple children.
 * It consists of nodes containing data and an array of child nodes.
 *
 * @class GeneralTree
 * @description A class representing a general tree structure with methods for interacting with the tree (adding/removing nodes, displaying structure, etc.).
 * 
 * @method buildTree - Interactively builds the tree from user input starting from the root node. It prompts for the root node data and recursively adds child nodes.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method createNode - Creates a new node containing the specified data and initializes its children as an empty array.
 *                     - Time Complexity: O(1)
 *
 * @method addChildren - Adds child nodes to a specified node interactively, allowing for recursive addition of child nodes.
 *                       - Time Complexity: O(n), where n is the total number of nodes being added.
 *
 * @method printTree - Displays the tree structure starting from the root node, showing the hierarchy with indentation to represent different levels.
 *                     - Time Complexity: O(n)
 *
 * @method printNode - Recursively prints a node and all its descendants with indentation to represent levels.
 *                     - Time Complexity: O(n)
 *
 * @method findNode - Searches for a node containing the specified data and returns it if found, starting from the root node.
 *                   - Time Complexity: O(n)
 *
 * @method removeNode - Removes a specified node and its entire subtree from the tree by locating the node and deleting it.
 *                     - Time Complexity: O(n), as it may require traversing the tree to locate the node.
 *
 * @method findParent - Finds the parent of a node with the specified data by traversing the tree.
 *                     - Time Complexity: O(n)
 *
 * @method contains - Checks whether the tree contains a node with the specified data.
 *                   - Time Complexity: O(n)
 *
 * @method depth - Computes the maximum depth (or height) of the tree, representing the longest path from the root to any leaf node.
 *                - Time Complexity: O(n)
 *
 * @method display - Outputs a visually formatted representation of the tree for readability (printed tree structure).
 *                  - Time Complexity: O(n)
 *
 * @returns {GeneralTree} - An object of the GeneralTree class that represents the tree structure and provides methods for interacting with it.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class GeneralTree {

    constructor(showSteps = false) {
        this.root = null;
        this.showSteps = false;
    }

    buildTree() {
        this.logStep("Step 1: Building tree...");
        
        rl.question("Enter root node data: ", (rootData) => {
            if (!rootData) {
                console.log("Please enter root node data. Without it, the tree cannot be created.");
                rl.close();
                return;
            }

            this.logStep(`Step 2: Root node '${rootData}' has been created.`);
            this.root = this.createNode(rootData);
            this.addChildren(this.root, () => {
                this.logStep("Step 3: Tree has been created.");
                this.printTree(); // Print the final tree
                rl.close();
            });
        });
    }

    createNode(data) {
        this.logStep(`Creating node with data: '${data}'`);
        return { data, children: [] };
    }

    addChildren(node, callback) {
        this.logStep(`Step 4: Asking for number of children for node '${node.data}'`);

        rl.question(`Enter number of children for node '${node.data}': `, (numChildren) => {
            numChildren = parseInt(numChildren, 10);
            if (isNaN(numChildren) || numChildren < 0) {
                console.log(`Invalid number of children for node '${node.data}'`);
                rl.close();
                return;
            }

            this.logStep(`Step 5: Adding ${numChildren} children to node '${node.data}'`);
            this.addChildNodes(node, numChildren, 0, callback);
        });
    }

    addChildNodes(node, numChildren, i, callback) {
        if (i >= numChildren) {
            callback();
            return;
        }

        rl.question(`Enter data for child ${i + 1} of '${node.data}': `, (childData) => {
            if (!childData) {
                console.log(`Skipping child ${i + 1} due to missing data.`);
            } else {
                this.logStep(`Step 6: Creating child node '${childData}' for parent '${node.data}'`);
                const childNode = this.createNode(childData);
                node.children.push(childNode);

                this.addChildren(childNode, () => {
                    this.addChildNodes(node, numChildren, i + 1, callback);  // Recursively continue adding children
                });
            }
        });
    }

    printTree() {
        if (!this.root) {
            console.log("Tree is empty.");
            return;
        }

        this.logStep("Step 7: Printing the tree structure...");
        this.printNode(this.root, 0);
    }

    printNode(node, level) {
        console.log(" ".repeat(level * 4) + `├── ${node.data}`);
        for (const child of node.children) {
            this.printNode(child, level + 1);
        }
    }

    logStep(message) {
        if (this.showSteps) {
            console.log(message);
        }
    }

    findNode(data, node = this.root) {
        if (!node) return null;
        if (node.data === data) return node;
        for (const child of node.children) {
            const result = this.findNode(data, child);
            if (result) return result;
        }
        return null;
    }

    contains(data) {
        return this.findNode(data) !== null;
    }

    depth(node = this.root) {
        if (!node) return 0;
        let maxDepth = 0;
        for (const child of node.children) {
            maxDepth = Math.max(maxDepth, this.depth(child));
        }
        return maxDepth + 1;
    }

    removeNode(data) {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }

        if (data === this.root.data) {
            this.root = null;
            console.log("Root node is removed. Now tree is empty");
            return;
        }

        const parent = this.findParent(data, this.root);

        if (!parent) {
            console.log(`Node with data '${data}' not found.`);
            return;
        }

        parent.children = parent.children.filter(child => child.data !== data);
        console.log(`Node with data '${data}' removed`);
    }

    findParent(data, node) {
        if (!node) return null;
        for (const child of node.children) {
            if (child.data === data) {
                return node;
            }
            const result = this.findParent(data, child);
            if (result) return result;
        }
        return null;
    }
}

module.exports = GeneralTree;

/**
 * NarryTree is a data structure that represents an N-ary tree, where each node can have any number of children.
 * It consists of nodes containing data and a list of child nodes.
 *
 * @class NarryTree
 * @description A class representing an N-ary tree structure with methods for interacting with the tree (adding/removing nodes, displaying structure, traversing, etc.).
 * 
 * @method buildTree - Builds the tree interactively by creating nodes starting from the root. It assigns the first node as the root and recursively adds child nodes.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method createNode - Creates a new node with the specified data, initializing the children array as empty.
 *                     - Time Complexity: O(1)
 *
 * @method addChildren - Adds multiple child nodes to a specified parent node. Each child node is added iteratively.
 *                       - Time Complexity: O(m), where m is the number of children being added.
 *
 * @method arrayToTree - Converts an array representation of the tree into an actual N-ary tree structure.
 *                       - Time Complexity: O(n), where n is the total number of nodes in the array representation.
 *
 * @method printTree - Prints the tree structure in a visually readable format with indentation to represent the depth of each node.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method findNode - Searches for a node with the specified data in the tree and returns it if found.
 *                   - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method contains - Checks if a node with the specified data exists in the tree.
 *                   - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method removeNode - Removes the node with the specified data and its entire subtree. If the node is the root, the tree is emptied.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method findParent - Finds the parent node of the node with the specified data by traversing the tree.
 *                     - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method depth - Computes the depth (or height) of the tree, which is the longest path from the root to a leaf node.
 *                - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method printNode - Prints the data of the node and its descendants, showing the tree structure with indentation for child nodes.
 *                    - Time Complexity: O(n), where n is the total number of nodes.
 *
 * @method logSteps - Logs detailed steps of actions performed on the tree (e.g., creating nodes, adding children).
 *                   - Time Complexity: O(1) for each log action.
 *
 * @method isEmpty - Checks if the tree is empty, meaning it has no nodes.
 *                  - Time Complexity: O(1)
 *
 * @returns {NarryTree} - An object of the NarryTree class that represents the tree structure and provides methods for interacting with it.
 */
class Node{
    constructor(data = null){
        this.data = data;
        this.children = [];
    }
}

class NarryTree{

    constructor(showSteps = false){
        this.root = null;
        this.children = [];
        this.showSteps = showSteps;
    }

    logSteps(message){
        if(this.showSteps){
            console.log(message);
        }
    }

    buildTree(data , parent = null){
        this.logSteps(`Creating node with data: ${data}`);
        const newNode = new Node(data);

        if(!this.root){
            this.root = newNode;
            this.logSteps(`Root node ${data} created.`);
        }else if(parent){
            parent.children.push(newNode);
            this.logSteps(`Added node ${data} as a child of ${parent.data}`);
        }

        return newNode;
    }

    addChildren(node , childDataArray){

        if (!node) {
            console.log("The parent node is undefined.");
            return;
        }

        if (!Array.isArray(childDataArray)) {
            childDataArray = [childDataArray];
        }

        this.logSteps(`Adding ${childDataArray.length} children to node ${node.data}`);

        if (!node.children) {
            node.children = []; 
        }

        if (childDataArray.length === 0) {
            console.log("No children to add.");
            return;
        }

        for(const childData of childDataArray){
            const childNode = new Node(childData);
            node.children.push(childNode);
            this.logSteps(`Child node ${childData} added to ${node.data}`);
        }
    }

    arrayToTree(arr){

        const createNodeFromArray = (nodeArray) =>{
            if(!nodeArray){
                return null;
            }

            const newNode = new Node(nodeArray.data);
            this.logSteps(`Node created from array : ${nodeArray.data}`);

            for(const child of nodeArray.children || []){
                const childNode = createNodeFromArray(child);
                if(childNode){
                    newNode.children.push(childNode);
                }
            }

            return newNode;
        };

        this.root = createNodeFromArray(arr);
        this.logSteps("Tree created from array representation.");
    }

    findNode(data , node = this.root){
        if(!node){
            return null;
        }

        if(node.data === data){
            this.logSteps(`Node with data ${data} found.`);
            return node;
        }

        for(const child of node.children){
            const foundNode = this.findNode(data , child);
            if(foundNode){
                return foundNode;
            }
        }

        return null;
    }

    removeNode(data){
        if(!this.root){
            console.log("Tree is empty.");
            return ;
        }

        if(this.root.data === data){
            this.logSteps(`Root node ${data} removed. Tree is now empty.`);
            this.root = null;
            return;
        }

        const parent = this.findParent(data);

        if(!parent){
            console.log(`Node with data ${data} not found.`);
            return;
        }

        parent.children = parent.children.filter(child => child.data !== data);

        this.logSteps(`Node with data ${data} and it's subtree removed from it's parent ${parent.data}.`);
    }

    findParent(data , node=this.root){
        if(!node){
            return null;
        }

        for(const child of node.children){
            if(child.data === data){
                this.logSteps(`Parent node for ${data} is ${node.data}`);
                return node;
            }

            const parent = this.findParent(data , child);
            if(parent){
                return parent;
            }
        }

        return null;
    }

    printTree(node = this.root , level = 0){
        if(!node){
            console.log("Tree is empty.");
            return;
        }

        console.log(" ".repeat(level * 4) + `├── ${node.data}`);
        for(const child of node.children){
            this.printTree(child , level + 1);
        }
    }

    contains(data){
        const answer = this.findNode(data) !== null;
        if(answer){
            this.logSteps(`Tree contain ${data}.`)
        }else{
            this.logSteps(`Tree can not contain ${data}.`)
        }

        return answer;
    }

    depth(node = this.root){
        if(!node){
            return 0;
        }

        let maxDepth = 0;
        for(const child of node.children){
            maxDepth = Math.max(maxDepth , this.depth(child));
        }
        return maxDepth + 1;
    }
}

module.exports = NarryTree;
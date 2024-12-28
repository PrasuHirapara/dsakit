/**
 * BTree is a self-balancing search tree that maintains sorted data and allows searches, sequential access, 
 * insertions, and deletions in logarithmic time. It is commonly used in databases and file systems.
 *
 * Methods:
 *
 * @method insert(key) - Inserts a key into the BTree while maintaining its properties.
 *                       Time Complexity: O(t log n), where t is the minimum degree and n is the number of keys.
 *
 * @method traverse() - Performs an in-order traversal of the BTree and returns all keys in sorted order.
 *                      Time Complexity: O(n), where n is the number of keys in the tree.
 *
 * @method search(key) - Searches for a specific key in the BTree.
 *                       Time Complexity: O(t log n), where t is the minimum degree and n is the number of keys.
 *
 * @method splitChild(parent,index) - Splits a full child node during insertion to maintain the BTree properties.
 *                                     Time Complexity: O(t), where t is the minimum degree.
 *
 * @method insertNonFull(node,key) - Inserts a key into a node that is not full, ensuring balance.
 *                                    Time Complexity: O(t), where t is the minimum degree.
 * 
 * @method fromArray(arr) -  Converts an array of elements into a BTree by sequentially inserting each element.
 * Notes:
 * - The minimum degree (t) determines the range of keys a node can hold (between t-1 and 2t-1 keys).
 * - BTree guarantees efficient handling of large datasets with logarithmic time operations and minimizes disk I/O.
 */


class Node{
    constructor(isLeaf){
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
    }
}

class Btree{
    constructor(t){
        this.root = new Node(true);
        this.t = t; // Range for keys in each node
    }

    insert(key){
        const root = this.root;

        if(root.keys.length === 2 * this.t - 1){
            const newRoot = new Node(false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot , 0);
            this.root = newRoot;
        }

        this.insertNonFull(this.root , key);
    }

    // Insert a key into a node that is not full
    insertNonFull(node , key){
        let i = node.keys.length - 1;

        if(node.isLeaf){

            while(i >= 0 && key < node.keys[i]){
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        }else{
            while(i >= 0 && key < node.keys[i]){
                i--;
            }
            i++;

            if(node.children[i].keys.length === 2 * this.t - 1){
                this.splitChild(node , i);

                if(key > node.keys[i]){
                    i++;
                }
            }

            this.insertNonFull(node.children[i] , key);
        }
    }

    splitChild(parent , index){
        const fullNode = parent.children[index];
        const newNode = new Node(fullNode.isLeaf);

        // middle key movw upto parent
        const middleKey = fullNode.keys(this.t - 1, 1)[0];

        newNode.keys = fullNode.keys.splice(this.t - 1);

        if(!fullNode.isLeaf){
            newNode.children = fullNode.children.splice(this.t);
        }

        // insert new node and middle key into the parent
        parent.keys.splice(index , 0, middleKey);
        parent.children.splice(index + 1 , 0 , newNode);
    }

    fromArray(arr) {
        for (const key of arr) {
            this.insert(key);
        }
    }

    traverse(node = this.root , result = []){
        if(!node){
            return result;
        }

        for(let i = 0; i< node.keys.length; i++){
            if(!node.isLeaf){
                this.traverse(node.children[i] , result);
            }
            result.push(node.keys[i]);
        }

        if(!node.isLeaf){
            this.traverse(node.children[node.keys.length], result); // visit last child
        }

        return result;
    }

    search(key , node = this.root){
        let i = 0;
        while(i < node.keys.length && key > node.keys[i]){
            i++;
        }

        if(i < node.keys.length && key === node.keys[i]){
            return {node , index: i}; // found
        }

        if(node.isLeaf){
            return null; // not found
        }

        return this.search(key , node.children[i]);
    }
}

module.exports = Btree;
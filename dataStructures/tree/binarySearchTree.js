
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Node {

    constructor(data = null, left = null, right = null){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinarySearchTree {

    constructor(showSteps = false){
        this.root = new Node();
        showSteps = true;
    }

    insert(data) {
        if(!data) {
            console.log("Provide valid input");
            return;
        }

        const node = new Node(data);
        const temp = this.root;

        if(!this.root) {
            this.root = node
            return;
        }

        
    }    
    
    fromArray(arr = null) {
        if(!arr) {
            console.log("Provide valid input");
            return;
        }

        for(let i = 0; i < arr.length; i++) {

        }
    }
}

module.exports = BinarySearchTree;
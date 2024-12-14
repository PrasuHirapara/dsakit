const dsa = require("./index.js");

const tree = new dsa.BinaryTree();
tree.buildTree();
console.log(tree.isBalanced());

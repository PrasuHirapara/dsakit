const dsa = require("./index.js");

const tree = new dsa.NArrayTree();

tree.buildTree(3);

const node3 = tree.findNode(3);
tree.addChildren(node3 , [4,5]);

const node4 = tree.findNode(4);
tree.addChildren(node4 , [6,7,8]);

const node8 = tree.findNode(8);
tree.addChildren(node8 , [9,10]);

tree.printTree();

tree.removeNode(8);

tree.printTree();
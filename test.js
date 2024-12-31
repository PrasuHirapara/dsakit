const dsa = require("./index.js");

tree = new dsa.TrieTree();
tree.insert("mohit");
tree.insert("prasu");
tree.insert("martin")

tree.deleteWord("martin");
const ans = tree.traverse();
console.log(ans);
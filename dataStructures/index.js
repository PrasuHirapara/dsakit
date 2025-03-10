const linked_list = require('./linked list/index.js');
const stack = require('./stack/index.js');
const queue = require('./queue/index.js');
const tree = require("./tree/index.js");
const graph = require("./graph/index.js");

module.exports = {
    ...linked_list,
    ...stack,
    ...queue,
    ...tree,
    ...graph
}
const algo = require('./algorithms/index.js');
const ds = require('./dataStructures/index.js');

const dsakit = {
  ...algo,
  ...ds
};

module.exports = dsakit;
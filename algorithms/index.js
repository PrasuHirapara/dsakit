const sorting = require('./sorting/index.js');
const dynamicProgramming = require('./dynamicPrograamming/index.js');
const matrix = require('./matrix/index.js');

module.exports = {
  ...sorting,
  ...dynamicProgramming,
  ...matrix
};
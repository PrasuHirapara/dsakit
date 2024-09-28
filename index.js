const quickSort = require('./algorithms/sorting/quickSort.js');

let arr = [5346,7,8,76,9807,3582,1,7,7,653,8,4,3,2,1];
const steps = quickSort(arr, true);

console.log(steps, arr);
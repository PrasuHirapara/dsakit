const mergeSort = require('./algorithms/sorting/mergeSort.js');

let arr = [5,4,3,2,1];
const steps = mergeSort(arr, true);

console.log(steps, arr);
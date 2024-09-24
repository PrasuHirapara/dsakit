const selectionSort = require('./algorithms/sorting/selectionSort.js')
const countingSort = require('./algorithms/sorting//countingSort.js')
let arr = [1,20,5,19,11,13,5,8,2];

const steps = countingSort(arr);
console.log(steps);
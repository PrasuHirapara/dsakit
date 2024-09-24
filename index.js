const selectionSort = require('./algorithms/sorting/selectionSort.js')
const countingSort = require('./algorithms/sorting/cyclicSort.js')
let arr = [4,5,3,2,1];

const steps = countingSort(arr);
console.log(arr,steps)


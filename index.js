const selectionSort = require('./algorithms/sorting/selectionSort.js')
const countingSort = require('./algorithms/sorting/insertionSort.js');
const insertionSort = require('./algorithms/sorting/insertionSort.js');
let arr = [4,5,3,2,1];

const steps = insertionSort(arr, true);
console.log(arr,steps)


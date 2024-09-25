const selectionSort = require('./algorithms/sorting/selectionSort.js')
const countingSort = require('./algorithms/sorting/insertionSort.js');
const insertionSort = require('./algorithms/sorting/insertionSort.js');
const radixSort = require('./algorithms/sorting/radixSort.js')
let arr = [44,53,3,222,10];

// const steps = insertionSort(arr, true);
// console.log(arr,steps)

radixSort(arr , true)
console.log(arr);



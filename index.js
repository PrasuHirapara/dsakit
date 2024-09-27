const selectionSort = require('./algorithms/sorting/selectionSort.js')
const countingSort = require('./algorithms/sorting/insertionSort.js');
const insertionSort = require('./algorithms/sorting/insertionSort.js');
const radixSort = require('./algorithms/sorting/radixSort.js');
const binarySearch = require('./algorithms/searching/binarySearch.js');
const sequentialSearch = require('./algorithms/searching/sequentialSearch.js');

let arr = [1 ,3 ,7, 9 , 11];

// const steps = insertionSort(arr, true);
// console.log(arr,steps)

// radixSort(arr , true)
// console.log(arr);
const taregt = 3
console.log(sequentialSearch(arr , taregt));




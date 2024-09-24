
# Sorting Algorithms in DSAKIT

This folder contains implementations of various sorting algorithms. All sorting algorithms are designed to sort the array in place and return an array of steps that show the process of sorting.

## Note
- All algorithms sort the array in place.
- The steps returned are intermediate snapshots of the array during sorting.

## List of Algorithms

Bubble Sort
Selection Sort
Insertion Sort
Cyclic Sort
Counting Sort
Merge Sort
Radix Sort
Merge Sort
Quick Sort
Tim Sort 

---

## Steps to Run Sorting Algorithms

### Example: Insertion Sort

1. Import the algorithm function:
   ```js
   const insertionSort = require('./algorithms/sorting/insertionSort.js');
   ```

2. Define an array to be sorted:
   ```js
   const arr = [64, 34, 25, 12, 22, 11, 90];
   ```

3. Call the function to sort the array and get the steps:
   ```js
   const steps = insertionSort(arr);
   ```

4. Output the sorted array and steps:
   ```js
   console.log('Sorted Array:', arr);
   console.log('Steps:', steps);
   ```

---

## Running Other Algorithms

Each sorting algorithm follows a similar structure. Replace `insertionSort` with the name of the algorithm you want to use:

- For **Bubble Sort**:
   ```js
   const bubbleSort = require('./algorithms/sorting/bubbleSort.js');
   const steps = bubbleSort(arr);
   ```

- For **Selection Sort**:
   ```js
   const selectionSort = require('./algorithms/sorting/selectionSort.js');
   const steps = selectionSort(arr);
   ```

- For **Cyclic Sort**:
   ```js
   const cyclicSort = require('./algorithms/sorting/cyclicSort.js');
   const steps = cyclicSort(arr);
   ```

- For **Counting Sort**:
   ```js
   const countingSort = require('./algorithms/sorting/countingSort.js');
   const steps = countingSort(arr);
   ```

- For **Merge Sort**:
   ```js
   const mergeSort = require('./algorithms/sorting/mergeSort.js');
   const steps = mergeSort(arr);
   ```

- For **Radix Sort**:
   ```js
   const radixSort = require('./algorithms/sorting/radixSort.js');
   const steps = radixSort(arr);
   ```

- For **Heap Sort**:
   ```js
   const heapSort = require('./algorithms/sorting/heapSort.js');
   const steps = heapSort(arr);
   ```

- For **Quick Sort**:
   ```js
   const quickSort = require('./algorithms/sorting/quickSort.js');
   const steps = quickSort(arr);
   ```

- For **Tim Sort**:
   ```js
   const timSort = require('./algorithms/sorting/timSort.js');
   const steps = timSort(arr);
   ```

---

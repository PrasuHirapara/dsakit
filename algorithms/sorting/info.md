
# Sorting Algorithms in DSAKIT

This folder contains implementations of various sorting algorithms. All sorting algorithms are designed to sort the array in place and return an array of steps that show the process of sorting.

## Note
- All algorithms sort the array in place.
- The steps returned are intermediate snapshots of the array during sorting.

## List of Algorithms

- Bubble Sort
- Counting Sort
- Cyclic Sort
- Heap Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Radix Sort
- Selection Sort
- Tim Sort

---

## Steps to Run Sorting Algorithms

### Example: Insertion Sort

1. Import the algorithm function:
   ```js
   const { InsertionSort } = require('DSAKIT');
   ```

2. Define an array to be sorted:
   ```js
   const arr = [64, 34, 25, 12, 22, 11, 90];
   ```

3. Call the function to sort the array and get the steps:
   ```js
   const steps = InsertionSort(arr);
   ```

4. Output the sorted array and steps:
   ```js
   console.log('Sorted Array:', arr);
   console.log('Steps:', steps);
   ```

---

## Running Other Algorithms

Each sorting algorithm follows a similar structure. Replace `InsertionSort` with the name of the algorithm you want to use:

- For **Bubble Sort**:
   ```js
   const { BubbleSort } = require('DSAKIT');
   const steps = BubbleSort(arr);
   ```

- For **Selection Sort**:
   ```js
   const { SelectionSort } = require('DSAKIT');
   const steps = SelectionSort(arr);
   ```

- For **Cyclic Sort**:
   ```js
   const { CyclicSort } = require('DSAKIT');
   const steps = CyclicSort(arr);
   ```

- For **Counting Sort**:
   ```js
   const { CountingSort } = require('DSAKIT');
   const steps = CountingSort(arr);
   ```

- For **Merge Sort**:
   ```js
   const { MergeSort } = require('DSAKIT');
   const steps = MergeSort(arr);
   ```

- For **Radix Sort**:
   ```js
   const { RadixSort } = require('DSAKIT');
   const steps = RadixSort(arr);
   ```

- For **Heap Sort**:
   ```js
   const { HeapSort } = require('DSAKIT');
   const steps = HeapSort(arr);
   ```

- For **Quick Sort**:
   ```js
   const { QuickSort } = require('DSAKIT');
   const steps = QuickSort(arr);
   ```

- For **Tim Sort**:
   ```js
   const { TimSort } = require('DSAKIT');
   const steps = TimSort(arr);
   ```

---
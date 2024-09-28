/**
 * Sorts an array using divide and conqurer approach in place.
 * Generally, it is considered faster than other sorting algorithm.
 * @param array - Original array which needs to be sorted.
 * @param reverse - Sorts an array into reverse order.
 * @returns - Array of all intermediate array ( steps ) at each recursive call 
*/

// Time complexity: O(n * log(n))
// Space complexity: O(1) for sorting in place, O(log n) for recursion stack
// Stable sorting algorithm

let steps = [];

// MergeSort function to sort the array
const mergeSort = (array, reverse = false, start = 0, end = array.length - 1) => {
    if (start >= end) {
        return array;
    }

    const mid = Math.floor((start + end) / 2);

    // Recursively divide the array into two halves
    mergeSort(array, reverse, start, mid);
    mergeSort(array, reverse, mid + 1, end);

    // Merge the two halves in place
    const merged = merge(array, reverse, start, mid, end);

    // Format the left, right, and merged arrays for the step log
    const leftPart = array.slice(start, mid + 1);
    const rightPart = array.slice(mid + 1, end + 1);
    const stepLog = `Left = ${leftPart} Right = ${rightPart} Merged = ${merged}`;
    steps.push(stepLog);

    return steps;
};

// Merge function to merge two sorted halves in place
const merge = (array, reverse, start, mid, end) => {
    let leftIndex = start;
    let rightIndex = mid + 1;
    let temp = [];

    // Compare and merge elements from both halves
    while (leftIndex <= mid && rightIndex <= end) {
        if (!reverse) {
            if (array[leftIndex] <= array[rightIndex]) {
                temp.push(array[leftIndex++]);
            } else {
                temp.push(array[rightIndex++]);
            }
        } else {
            // Reverse sorting case: compare and push the larger element first
            if (array[leftIndex] >= array[rightIndex]) {
                temp.push(array[leftIndex++]);
            } else {
                temp.push(array[rightIndex++]);
            }
        }
    }

    // Collect remaining elements from the left half
    while (leftIndex <= mid) {
        temp.push(array[leftIndex++]);
    }

    // Collect remaining elements from the right half
    while (rightIndex <= end) {
        temp.push(array[rightIndex++]);
    }

    // Copy the merged elements back into the original array
    for (let i = 0; i < temp.length; i++) {
        array[start + i] = temp[i];
    }

    return array.slice(start, end + 1);
};

module.exports = mergeSort;
/**
 * Heap Sort is an efficient sorting algorithm based on a binary heap data structure.
 * It uses a "divide and conquer" approach and works by building a max heap from the input data.
 * The algorithm then repeatedly extracts the maximum element from the heap and reconstructs the heap
 * until the entire array is sorted.
 * Heap Sort is generally faster than other quadratic-time algorithms like Bubble Sort or Insertion Sort.
 * @param array - Original array which needs to be sorted.
 * @param reverse - Boolean flag to indicate if the array should be sorted in descending order.
 * @param logSteps - Boolean flag to indicate if intermediate steps should be logged.
 * @returns Object containing sorted array and array of intermediate steps if logSteps is true.
 */

// Not stable
// Time complexity: O(n * log n)
// Space complexity: O(1) for in-place sorting, O(log n) for the recursion stack

const swap = require("../../utils/swap");

const heapSort = (array, reverse = false, logSteps = false) => {
    const length = array.length;
    const steps = [];

    function logStep(message) {
        if (logSteps) { 
            steps.push(`Step ${steps.length + 1}: ${message}`); 
        }
    }

    function heapify(array, index, length , reverse) {
        let largestOrSmallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        logStep(`Heapifying at index ${index}, left=${left}, right=${right}, array=${JSON.stringify(array)}`);

        if (reverse) {
            // Min-heap logic for descending order
            if (left < length && array[left] < array[largestOrSmallest]) {
                largestOrSmallest = left;
            }
            if (right < length && array[right] < array[largestOrSmallest]) {
                largestOrSmallest = right;
            }
        } else {
            // Max-heap logic for ascending order
            if (left < length && array[left] > array[largestOrSmallest]) {
                largestOrSmallest = left;
            }
            if (right < length && array[right] > array[largestOrSmallest]) {
                largestOrSmallest = right;
            }
        }

        // If largestOrSmallest is not the root, swap and continue heapifying
        if (largestOrSmallest !== index) {
            swap(array, largestOrSmallest, index);
            logStep(`Swapped index ${index} with ${largestOrSmallest}: ${JSON.stringify(array)}`);
            heapify(array, largestOrSmallest, length, reverse);
        }
    }

    function sort(array, length) {
        logStep(`Starting to build the heap`);

        // Build max heap
        for (let index = Math.floor(length / 2 - 1); index >= 0; index--) {
            heapify(array, index, length, reverse);
        }

        logStep(`Heap built: ${JSON.stringify(array)}`);

        // Perform heap sort
        for (let i = length - 1; i >= 1; i--) {
            logStep(`Swapping root with index ${i}: ${array[0]}, ${array[i]}`);
            swap(array, 0, i);
            logStep(`Array after swap: ${JSON.stringify(array)}`);
            heapify(array, 0, i, reverse);  // Rebuild heap after removing the largest/smallest
        }
    }

    // Sort the array
    sort(array, length , reverse);

    logStep(`Final sorted array: ${JSON.stringify(array)}`);

    // Return the sorted array and optionally the steps if logSteps is true
    if (logSteps) {
        return {
            sortedArray: array,
            steps: steps.join("\n")
        };
    }

    return array;
}

module.exports = heapSort;

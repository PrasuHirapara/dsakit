/**
 * Sorts an array using divide and conquer approach in place.
 * Generally, it is also considered faster than other sorting algorithms along with merge sort.
 * @param array - Original array which needs to be sorted.
 * @param reverse - Sorts an array into reverse order.
 * @returns Array of all intermediate array (steps) at each recursive call
 */

const swap = require('../../utils/swap.js');

// Time complexity: O(n * log(n))
// Space complexity: O(1) for sorting in place, O(log n) for recursion stack
// Stable

let steps = new Array();

const quickSort = (array, reverse = false, start = 0, end = array.length - 1) => {
    if (start >= end) {
        return steps;
    }

    const mid = Math.floor(start + (end - start) / 2);
    const pivot = array[mid];
    let s = start, e = end;

    // Log the state of the array before partitioning
    const prevState = `Before array = [${array.slice(start, end + 1)}]`;

    // place pivot at correct place
    while (s <= e) {
        if (!reverse) {
            while (array[s] < pivot) {
                s++;
            }
            while (array[e] > pivot) {
                e--;
            }
        } else {
            while (array[s] > pivot) {
                s++;
            }
            while (array[e] < pivot) {
                e--;
            }
        }

        if (s <= e) {
            swap(array, s, e);
            s++;
            e--;
        }
    }

    // Log the state of the array after partitioning
    steps.push(`Pivot = ${pivot}, ${prevState}, After array = [${array.slice(start, end + 1)}]`);

    // recursively sort left and right arrays
    quickSort(array, reverse, start, e);
    quickSort(array, reverse, s, end);

    return steps;
}

module.exports = quickSort;
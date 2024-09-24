const swap = require('../../utils/swap.js');

/**
 * Sorts an array via placing maximum element at the end in each iteration. (in-place)
 * @param {Array} array Original array need to be sorted
 * @param {boolean} reverse Sorts an array in descending order 
 * @returns {Array} An array containing the array at each iteration.
 */

// Not Stable
// Time complexity: O(n * n)
// Space complexity: O(1)

const selectionSort = (array, reverse = false) => {
  if (array.length <= 1) {
    return array;
  }

  const length = array.length;
  const steps = [];

  for (let i = 0; i < length - 1; i++) {
    let max = i;
    let min = i;

    for (let j = 0; j < length - 1 - i; j++) {
      if (!reverse) {
        if (array[max] < array[j]) {
          max = j;
        }
      } else {
        if (array[min] > array[j]) {
          min = j;
        }
      }
    }

    if (!reverse && max !== i) {
      swap(array, length - i - 1, max);
    } else if (reverse && min !== i) {
      swap(array, i, min);
    }

    steps.push([...array]);
  }

  return steps;
}

module.exports = selectionSort;
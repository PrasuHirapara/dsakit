const swap = require('../../utils/swap.js');

/**
 * Sort an array of continuous whole numbers (range[0, n]) in place.
 * @param array Original array that needs to be sorted
 * @param reverse Sorts the array in reverse order.
 * @throws Error if the array does not contain continuous elements.
 * @returns An array containing the array at each iteration.
 */

// Time complexity: O(n)
// Space complexity: O(1)

const cyclicSort = (array, reverse = false) => {
    if (array.length <= 1) {
        return array;
    }

    const length = array.length;
    let steps = [];
    let index = 0;

    // Sorting logic
    while (index < length) {
        const correctIndex = reverse ? length - 1 - array[index] : array[index] - 1;

        if (array[index] < length && array[index] !== array[correctIndex]) {
            swap(array, index, correctIndex);
            steps.push([...array]);
        } else {
            index++;
        }
    }

    return steps;
};

module.exports = cyclicSort;
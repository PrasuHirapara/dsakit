const swap = require('../../utils/swap');

/**
    * Sorts an array in the ascending or descending order in-place ( default : ascending )
    * Divide array into soretd and unsorted part at each iteration
    * Works good when array is partially sorted
    * @param array Original array to be sorted
    * @param reverse Sotrs an array in descending order if  true
    * @returns An array containing the array's state at each iteraton.
*/

// Stable
// Time complexity: O(n * n)
// Best case time complexity : O(n)
// Space complexity: O(1)

const insertionSort = (array, reverse = false) => {

    const steps = [];
    const length = array.length;

    for (let i = 1; i < length; i++) {

        let swapped = false;
        for (let j = i; j > 0; j--) {
            if (!reverse) {
                if (array[j] < array[j - 1]) {
                    swap(array, j, j - 1);
                    swapped = true;
                }
            } else {
                if (array[j] > array[j - 1]) {
                    swap(array, j, j - 1);
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }

        steps.push([...array]);
    }

    return steps;
}

module.exports = insertionSort;
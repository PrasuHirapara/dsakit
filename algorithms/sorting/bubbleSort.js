const arraySwap = require('../../utils/swap.js');

/**
    Sorts an array in the ascending or descending order in-place ( default : ascending )
    * @param array Original array need to be sorted
    * @param reverse Sorts an array in descending order
    * @returns An array containing the array at each iteraton.
*/

// Stable
// Time complexity: O(n * n)
// Space complexity: O(1)

const bubbleSort = (array, reverse = false) => {
    if(array.length <= 1){
        return array;
    }

    const length = array.length
    const steps = [];

    for (let i = 0; i < length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < length - i - 1; j++) {
            if(!reverse){
                if (array[j] > array[j + 1]) {
                    arraySwap(array, j, j + 1);
                    swapped = true;
                }
            }else{
                if (array[j] < array[j + 1]) {
                    arraySwap(array, j, j + 1);
                    swapped = true;
                }
            }
        }

        steps.push([...array])

        if (!swapped) {
            break;
        }
    }

    return steps;
}

module.exports = bubbleSort;
/** 
    * Sorts an array of non-negative integers in ascending order using Radix Sort.
    * It uses a stable sorting algorithm (like Counting Sort) as a subroutine to sort the digits at each position. 
    * @param array - The original array of non-negative integers to be sorted.
    * @param reverse Sotrs an array in descending order if  true
    * @returns - The sorted array in ascending order.
 */

/**
    *  - Time complexity: O(d * (n + k)), where:
    *   - n is the number of elements in the array,
    *   - d is the number of digits in the largest number,
    *   - k is the range of the counting sort (i.e., the base of the numeral system).
    * - Space complexity: O(n + k)
 */

const radixSort = (array , reverse = false) =>{

    const length = array.length;

    function maxDigit(array) {
        // Find the maximum number in the array
        return Math.max(...array);
    }

    function countSort(array , exp){
        const output = new Array(length);
        const count = new Array(10).fill(0);

        // Count occurences of each digits
        for(let i = 0; i < length; i++){
            count[Math.floor((array[i] /exp) % 10)]++;
        }

        // Change count[i] so that it contains the actual position of this digit in output[]
        for(let i = 1; i < 10; i++){
            count[i] = count[i] + count[i - 1];
        }

        // building output array
        for(let i = length - 1; i >= 0; i--){
            const digit = Math.floor((array[i] / exp) % 10)
            output[count[digit] - 1] = array[i];
            count[digit]--;
        }

        // copy the output array to array , so that array now contains the sorted numbers
        for(let i = 0 ; i < length; i++){
            array[i] = output[i];
        }
    }
    
    const max = maxDigit(array);

    for(let exp = 1; Math.floor(max / exp) > 0; exp *= 10 ){
        countSort(array , exp);
    }

    if (reverse) {
        array.reverse();
    }

    return array;
}



module.exports = radixSort;
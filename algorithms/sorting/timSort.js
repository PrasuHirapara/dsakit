/**
 * TimSort is a hybrid sorting algorithm derived from Merge Sort and Insertion Sort.
 * It leverages the advantages of both algorithms, combining the simplicity of insertion sort 
 * for small arrays and the efficiency of merge sort for larger arrays.
 * The algorithm works by dividing the input array into smaller chunks, called runs, sorting 
 * them individually using Insertion Sort, and then merging them using Merge Sort.
 * TimSort performs exceptionally well on real-world data that often contains ordered sequences.
 *
 * @param array - Original array which needs to be sorted.
 * @param reverse - Boolean flag to indicate if the array should be sorted in descending order.
 * @param logSteps - Boolean flag to indicate if intermediate steps should be logged.
 * @returns Object containing the sorted array and an array of intermediate steps if logSteps is true.
 */

// Stable
// Time complexity: O(n * log n)
// Best case time complexity = O(n)
// Space complexity: O(n) for auxiliary arrays used during merging

const timSort = (array , reverse = false) =>{

    const RUN = 32; // Size of each run; smaller subarrays will be sorted using Insertion Sort
    const length = array.length;

    for(let i = 0; i < length; i += RUN){
        insertionSort(array , i , Math.min(i + RUN - 1 , length - 1) , reverse);
    }

    for(let j = RUN; j < length; j *= 2){

        for(let left = 0; left < length; left += j * 2){

            const mid = left + j - 1;
            const right = Math.min(left + 2 * j , length - 1);

            mergeSort(array , left , mid , right , reverse);
        }
    }

    return array;
}

const insertionSort = (array , left , right , reverse)=>{

    for(let i = left ; i <= right; i++){

        const curr = array[i];
        let j = i - 1;

        while(j >= left && (reverse ? array[j] < curr : array[j] > curr)){
            array[j + 1] = array[j];
            j--;
        }

        // Insert 'curr' into its correct position
        array[j + 1] = curr; 
    }
}

const mergeSort = (array , left , mid , right , reverse)=>{

    // Merge two sorted subarrays:
    // First subarray is array[left...mid]
    // Second subarray is array[mid + 1...right]

    const leftLen = mid - left + 1;
    const rightLen = right - mid;

    const leftArr = new Array[leftLen];
    const rightArr = new Array[rightLen];

    for(let i = 0; i < leftLen; i++){
        leftArr[i] = array[i];
    }

    for(let i = 0; i < rightLen; i++){
        rightArr[i] = array[mid + i + 1];
    }

    let i = 0;
    let j = 0;
    let k = left;
    
    while(i < leftLen && j < rightLen){

        if(reverse ? leftArr[i] > rightArr[j] : leftArr[i] <= rightArr[j]){
            array[k] = leftArr[i];
            i++;
            k++;
        }else{
            array[k] = rightArr[j];
            j++;
            k++;
        }
    }

     // Copy the remaining elements of leftArr[], if any
    while(i < leftLen){
        array[k] = leftArr[i];
        i++;
        j++;
    }

     // Copy the remaining elements of rightArr[], if any
    while(j < rightLen){
        array[k] = rightArr[j];
        j++;
        k++;
    }

}

module.exports = timSort
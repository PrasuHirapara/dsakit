/**
    * Searches for a target value in an array of integers using the Sequential Search (or Linear Search) algorithm.
    * This simple algorithm works by scanning each element in the array one-by-one until the target value is found or the end of the array is reached.
    * @param array - The array of integers in which the target value is searched.
    * @param target - The integer value to search for in the array.
    * @param start  - To fix range of searching in array from start to end.
    * @param end  - To fix range of searching in array from start to end.
    * @return - The index of the target value if found; otherwise, returns -1.
*/

/*
Time complexity = O(n)
Space complexity = O(1)
*/

const sequentialSearch = (array , target, start = 0, end = array.length - 1)=>{

    for(let i = start; i < end; i++){
        if(array[i] == target){
            return i; // return index if target found
        }
    }

    // if target is not found then return -1
    return -1;
}

module.exports = sequentialSearch;
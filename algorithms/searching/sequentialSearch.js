/**
    * Searches for a target value in an array of integers using the Sequential Search (or Linear Search) algorithm.
    * This simple algorithm works by scanning each element in the array one-by-one until the target value is found or the end of the array is reached.
    * @param array - The array of integers in which the target value is searched.
    * @param target - The integer value to search for in the array.
    * @return - The index of the target value if found; otherwise, returns -1.
*/

/*
Time complexity = O(n)
Space complexity = O(1)
*/

const sequentialSearch = (array , target)=>{

    const length = array.length;
    for(let i = 0; i< length; i++){
        if(array[i] == target){
            return i; // return index if target found
        }
    }

    // if target is not found then return -1
    return -1;
}

module.exports = sequentialSearch;
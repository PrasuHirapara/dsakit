/**
    * Searches for a target value in a sorted array of integers using the Binary Search algorithm.
    * This efficient algorithm works by repeatedly dividing the search interval in half.
    * @param array - The sorted array of integers in which the target value is searched.
    * @param start  - To fix range of searching in array from start to end.
    * @param end  - To fix range of searching in array from start to end.
    * @param target - The integer value to search for in the array.
    * @param logSteps - If true, logs and returns the steps taken during the search.
    * @param reverse - Searches the array in descending order if true.
    * @return - The index of the target value if found; otherwise, returns -1.
*/

/*
Time complexity = O(log n)
Space complexity = O(1) 
*/
const binarySearch = (array, target, start = 0, end = array.length - 1, logSteps = false, reverse = false) => {

    let steps = [];

    if (!reverse) {
        // Ascending order binary search
        while (start <= end) {

            const mid = Math.floor(start + (end - start) / 2);

            if (logSteps) {
                steps.push(`Searching between index ${start} and ${end}, mid is ${mid}, value at mid is ${array[mid]}`);
            }

            if (array[mid] == target) {

                if (logSteps) {
                    steps.push(`Target found at index ${mid}`);
                    return { index: mid, steps };  // Return both index and steps
                }

                return mid; // target found
            }


            if (array[mid] < target) {
                start = mid + 1; // Search right half
                if (logSteps) steps.push(`Target is greater than ${array[mid]}, moving right`);
            } else {
                end = mid - 1; // Search left half
                if (logSteps) steps.push(`Target is less than ${array[mid]}, moving left`);
            }
        }
    } else {
        while (start <= end) {

            // Descending order binary search
            const mid = Math.floor(start + (end - start) / 2);

            if (logSteps) {
                steps.push(`Searching between index ${start} and ${end}, mid is ${mid}, value at mid is ${array[mid]}`);
            }

            if (array[mid] == target) {

                if (logSteps) {
                    steps.push(`Target found at index ${mid}`);
                    return { index: mid, steps };  // Return both index and steps
                }

                return mid; // target found
            }


            if (array[mid] > target) {
                start = mid + 1; // Search right half
                if (logSteps) steps.push(`Target is smaller than ${array[mid]}, moving right`);
            } else {
                end = mid - 1; // Search left half
                if (logSteps) steps.push(`Target is greater than ${array[mid]}, moving left`);
            }
        }
    }

    // If target is not found
    if (logSteps) {
        steps.push("Target not found");
        return { index: -1, steps };
    }

    // return -1 if target value is not in the array
    return -1;
}

module.exports = binarySearch;
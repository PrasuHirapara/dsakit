/**
    * Sorts an array in the ascending or descending order in-place ( default : ascending )
    * This function is good for when array contains small values
    * @param array Original array to be sorted
    * @param reverse Sotrs an array in descending order if  true
    * @returns An array containing the array's state at each iteraton.
*/

// Stable
// Time complexity: O(n + m), n -> number of elemnts and m -> range of input values (max value)
// Space complexity: O(m)

const countingSort = (array , reverse = false)=>{
    const steps = [];

    if(array == null || array.length == 1){
        return ;
    }

    let max = array [0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }

    const frequency = new Array(max + 1).fill(0);
    
    for(let i = 0; i < array.length; i++){
        frequency[array[i]]++;
    }

    let index = 0;
    if(!reverse){
        for(let i =0; i<= max; i++){
            while(frequency[i] > 0){
                array[index] = i;
                index++;
                frequency[i]--;
            }
            steps.push([...array]);
        }
    }else{
        for(let i = max ; i >= 0; i--){
            while(frequency[i] > 0){
                array[index] = i;
                index++;
                frequency[i]--;
            }
            steps.push([...array]);
        }
    }

   return steps;
    
}

module.exports = countingSort;
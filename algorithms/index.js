const bubbleSort = require("./sorting/bubbleSort");
const countingSort = require("./sorting/countingSort");

const arr = ["mohit" ,"prasu" , "prasu1" , "mohit2" ,"pinak" , "mihir" , 1,2 ,22]
const arr2 = [1,2 ,22, "mohit" ,"prasu" ,423,4,223,34, "prasu1" , "mohit2" ,"pinak" , "mihir" ]

// bubbleSort(arr)
const temp = arr2.sort((a, b) => a - b);


// console.log(temp);
const arr3 = [3,4,5,6,1,2,8,2,3];
const ans = countingSort(arr3);
console.log(ans);


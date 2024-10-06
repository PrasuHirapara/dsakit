const dsa = require('./index.js');

let arr = [36,56,16,-232456,913,3658,34,43,43,5,5,6,7,]

const stack = new dsa.DynamicStack();
stack.fromArray(arr);

for(let i=0; i< 4; i++){
    console.log(stack.pop());
    
}
console.log(stack.peek());
console.log("##########################");

stack.display()
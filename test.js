const dsa = require("./index.js");

const coins = [1, 2, 5];
const amount = 11;

console.log(dsa.minCoins(amount, coins)); // Output: 3 (5 + 5 + 1)

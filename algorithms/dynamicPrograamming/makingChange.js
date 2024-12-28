/**
 * Making Change Problem
 *
 * This function calculates the minimum number of coins required to make a given amount.
 *
 * @param {number} amount - The total amount of money to make.
 * @param {Array} coins - An array of coin denominations available.
 * @returns {number} - The minimum number of coins needed to make the amount, or -1 if it's not possible.
 */
function minCoins(amount, coins) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

module.exports = minCoins;
/**
 * Knapsack Problem Solver
 *
 * This function solves the Knapsack problem in two variants:
 * - 0/1 Knapsack: Items can either be fully included or excluded.
 * - Fractional Knapsack: Items can be partially included to maximize value.
 *
 * @param {number} capacity - The maximum weight the knapsack can carry.
 * @param {Array} items - Array of objects, where each object has `weight` and `value` properties.
 * @param {boolean} isPartial - If true, solves the Fractional Knapsack; defaults to 0/1 Knapsack.
 * @returns {number} - The maximum value that can be obtained for the given capacity and items.
 */
function knapsack(capacity, items, isPartial = false) {
    if (isPartial) {
        return fractionalKnapsack(capacity, items);
    } else {
        return zeroOneKnapsack(capacity, items);
    }
}

function zeroOneKnapsack(capacity, items) {
    const n = items.length;
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const { weight, value } = items[i - 1];
        for (let w = 1; w <= capacity; w++) {
            if (weight <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

function fractionalKnapsack(capacity, items) {
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
    let totalValue = 0;

    for (let item of items) {
        if (capacity >= item.weight) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += (item.value / item.weight) * capacity;
            break;
        }
    }
    return totalValue;
}

module.exports = knapsack;
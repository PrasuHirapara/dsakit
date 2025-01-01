/**
 * Chain Matrix Multiplication Problem
 *
 * This function calculates the minimum number of scalar multiplications required
 * to multiply a sequence of matrices using the dynamic programming approach.
 *
 * @param {number[]} dimensions - An array where the i-th element represents the
 * number of rows in the i-th matrix and the (i+1)-th element represents the number
 * of columns in the i-th matrix.
 * @returns {number} - The minimum number of scalar multiplications needed.
 */

function chainMatrixMultiplication(dimensions) {
    const n = dimensions.length - 1;
    const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));
  
    // Base case: single matrix (cost is zero)
    for (let i = 0; i < n; i++) {
      dp[i][i] = 0;
    }
  
    // Calculate minimum cost for chains of increasing lengths
    for (let chainLength = 2; chainLength <= n; chainLength++) {
      for (let i = 0; i < n - chainLength + 1; i++) {
        const j = i + chainLength - 1;
  
        for (let k = i; k < j; k++) {
          const cost = dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1];
          dp[i][j] = Math.min(dp[i][j], cost);
        }
      }
    }
  
    return dp[0][n - 1];
}

module.exports = chainMatrixMultiplication;
  
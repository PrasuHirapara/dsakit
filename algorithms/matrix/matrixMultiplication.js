/**
 * Matrix Multiplication Problem
 *
 * This function performs matrix multiplication for valid matrices of any size
 * using a recursive divide-and-conquer algorithm.
 *
 * @param {number[][]} a - The first matrix (2D array).
 * @param {number[][]} b - The second matrix (2D array).
 * @returns {number[][]} - The resulting matrix after multiplication.
 * @throws {Error} - If matrices are not compatible for multiplication.
 */
function multiplyMatrices(a, b) {
    // Validate matrices
    if (!Array.isArray(a) || !Array.isArray(b) || a.length === 0 || b.length === 0) {
      throw new Error("Both inputs must be non-empty 2D arrays.");
    }
  
    const aCols = a[0].length;
    const bRows = b.length;
  
    if (aCols !== bRows) {
      throw new Error("Number of columns in Matrix A must equal the number of rows in Matrix B.");
    }
  
    const bCols = b[0].length;
  
    // Base case for single element matrices
    if (a.length === 1 && a[0].length === 1 && b.length === 1 && b[0].length === 1) {
      return [[a[0][0] * b[0][0]]];
    }
  
    // Pad matrices to make them square if necessary
    const size = Math.max(a.length, aCols, bCols);
    const paddedSize = 1 << Math.ceil(Math.log2(size));
    const paddedA = padMatrix(a, paddedSize);
    const paddedB = padMatrix(b, paddedSize);
  
    const result = strassenMultiply(paddedA, paddedB);
  
    // Remove padding from the result
    return result.slice(0, a.length).map(row => row.slice(0, bCols));
}

function padMatrix(matrix, size) {
  const padded = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (matrix[i]?.[j] ?? 0))
  );
  return padded;
}

function addMatrices(a, b) {
  return a.map((row, i) => row.map((val, j) => val + b[i][j]));
}

function subtractMatrices(a, b) {
  return a.map((row, i) => row.map((val, j) => val - b[i][j]));
}

function splitMatrix(matrix) {
  const n = matrix.length / 2;
  const topLeft = matrix.slice(0, n).map(row => row.slice(0, n));
  const topRight = matrix.slice(0, n).map(row => row.slice(n));
  const bottomLeft = matrix.slice(n).map(row => row.slice(0, n));
  const bottomRight = matrix.slice(n).map(row => row.slice(n));
  return [topLeft, topRight, bottomLeft, bottomRight];
}

function mergeMatrices(tl, tr, bl, br) {
  const top = tl.map((row, i) => row.concat(tr[i]));
  const bottom = bl.map((row, i) => row.concat(br[i]));
  return top.concat(bottom);
}

function strassenMultiply(a, b) {
  const n = a.length;

  if (n === 1) {
    return [[a[0][0] * b[0][0]]];
  }

  const [a11, a12, a21, a22] = splitMatrix(a);
  const [b11, b12, b21, b22] = splitMatrix(b);

  const m1 = strassenMultiply(addMatrices(a11, a22), addMatrices(b11, b22));
  const m2 = strassenMultiply(addMatrices(a21, a22), b11);
  const m3 = strassenMultiply(a11, subtractMatrices(b12, b22));
  const m4 = strassenMultiply(a22, subtractMatrices(b21, b11));
  const m5 = strassenMultiply(addMatrices(a11, a12), b22);
  const m6 = strassenMultiply(subtractMatrices(a21, a11), addMatrices(b11, b12));
  const m7 = strassenMultiply(subtractMatrices(a12, a22), addMatrices(b21, b22));

  const c11 = addMatrices(subtractMatrices(addMatrices(m1, m4), m5), m7);
  const c12 = addMatrices(m3, m5);
  const c21 = addMatrices(m2, m4);
  const c22 = addMatrices(subtractMatrices(addMatrices(m1, m3), m2), m6);

  return mergeMatrices(c11, c12, c21, c22);
}

module.exports = multiplyMatrices;
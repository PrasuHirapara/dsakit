/**
 * String Matching Algorithm
 *
 * This function implements two popular string matching algorithms:
 * - Naive Search: A simple but less efficient algorithm.
 * - Knuth-Morris-Pratt (KMP): A more efficient pattern matching algorithm.
 *
 * @param {string} text - The text in which to search for the pattern.
 * @param {string} pattern - The pattern to search for within the text.
 * @param {boolean} useKMP - If true, uses the KMP algorithm; defaults to Naive Search.
 * @returns {Array<number>} - An array of starting indices where the pattern is found in the text.
 */

function stringMatching(text, pattern, useKMP = false) {
    if (useKMP) {
        return kmpSearch(text, pattern);
    } else {
        return naiveSearch(text, pattern);
    }
}

function naiveSearch(text, pattern) {
    const indices = [];
    const n = text.length;
    const m = pattern.length;

    for (let i = 0; i <= n - m; i++) {
        let match = true;
        for (let j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            indices.push(i);
        }
    }
    return indices;
}

function kmpSearch(text, pattern) {
    const lps = computeLPSArray(pattern);
    const indices = [];
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return indices;
}

function computeLPSArray(pattern) {
    const lps = Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

module.exports = stringMatching;
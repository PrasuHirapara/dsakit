/**
 * Trie (Prefix Tree) implementation for efficient string storage and searching.
 * 
 * A Trie is a tree-like data structure used for storing strings in a way that
 * enables efficient prefix-based searches. This implementation includes:
 * 
 * - Insertions of words into the Trie.
 * - Search operations for checking if a word or a prefix exists.
 * - Deletion of words from the Trie.
 * - Traversal methods to find all words or words with a given prefix.
 * 
 * Methods:
 * 
 * - insert(word): Inserts a word into the Trie.
 * - search(word): Returns true if the word exists in the Trie; otherwise false.
 * - startsWith(prefix): Returns true if there is any word in the Trie that starts with the given prefix.
 * - getWordsWithPrefix(prefix): Returns all words in the Trie that start with the given prefix.
 * - deleteWord(word): Deletes a word from the Trie, if it exists.
 * - traverse(): Returns all words stored in the Trie.
 * 
 * Data Structure:
 * - The Trie is implemented using nodes, each node contains:
 *   - `children`: An array of size 26 representing the English alphabet (a-z).
 *   - `isEndOfWord`: A boolean flag indicating whether the node represents the end of a word.
 * 
 * - Time Complexity:
 *   - insert(word): O(n), where n is the length of the word.
 *   - search(word): O(n), where n is the length of the word.
 *   - startsWith(prefix): O(m), where m is the length of the prefix.
 *   - getWordsWithPrefix(prefix): O(m + k), where m is the length of the prefix, and k is the number of words with the given prefix.
 *   - deleteWord(word): O(n), where n is the length of the word.
 *   - traverse(): O(w), where w is the total number of words in the Trie.
 */
class Node {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  getNode() {
    return new Node();
  }

  insert(word) {
    word = word.toLowerCase();
    let crawler = this.root;

    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;
      if (crawler.children[index] === null) {
        crawler.children[index] = this.getNode();
      }
      crawler = crawler.children[index];
    }

    crawler.isEndOfWord = true;
  }

  search(word) {
    word = word.toLowerCase();
    let crawler = this.root;

    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;
      if (crawler.children[index] === null) {
        return false;
      }
      crawler = crawler.children[index];
    }

    return crawler.isEndOfWord;
  }

  startsWith(prefix) {
    prefix = prefix.toLowerCase();
    let crawler = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const index = prefix.charCodeAt(i) - 97;
      if (crawler.children[index] === null) {
        return false;
      }
      crawler = crawler.children[index];
    }

    return true;
  }

  // dfs to find all words with a given prefix
  dfs(node, prefix, results) {
    if (node.isEndOfWord) {
      results.push(prefix);
    }

    for (let i = 0; i < 26; i++) {
      if (node.children[i] !== null) {
        const char = String.fromCharCode(97 + i);
        this.dfs(node.children[i], prefix + char, results);
      }
    }
  }

  getWordsWithPrefix(prefix) {
    prefix = prefix.toLowerCase();
    let crawler = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const index = prefix.charCodeAt(i) - 97;
      if (crawler.children[index] === null) {
        return [];
      }
      crawler = crawler.children[index];
    }

    const results = [];
    this.dfs(crawler, prefix, results);
    return results;
  }

  deleteWord(word) {
    const helper = (node, depth) => {
      if (depth === word.length) {
        if (!node.isEndOfWord) {
          return false;
        }
        node.isEndOfWord = false;
        return node.children.every((child) => child === null);
      }

      const index = word.charCodeAt(depth) - 97;
      if (node.children[index] === null) {
        return false;
      }

      const canDeleteChild = helper(node.children[index], depth + 1);

      if (canDeleteChild) {
        node.children[index] = null;
        return (
          node.children.every((child) => child === null) && !node.isEndOfWord
        );
      }

      return false;
    };

    helper(this.root, 0);
  }
  traverse() {
    const results = [];
    this.dfs(this.root, "", results); 
    return results;
  }
}

module.exports = Trie;

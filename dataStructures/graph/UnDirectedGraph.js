/**
 * UndirectedGraph is a data structure to represent an undirected graph using an adjacency list.
 * It supports operations such as adding vertices, adding and removing undirected edges, performing traversals,
 * detecting cycles, and printing the graph.
 *
 * Methods:
 *
 * @method addVertex - Adds a new vertex to the graph.
 *                     Time Complexity: O(1)
 *
 * @method addEdge - Adds an undirected edge between two vertices.
 *                   Time Complexity: O(1)
 *
 * @method deleteVertex - Removes a vertex and all associated edges from the graph.
 *                        Time Complexity: O(V + E)
 *
 * @method deleteEdge - Removes an undirected edge between two vertices.
 *                      Time Complexity: O(E)
 *
 * @method bfs - Performs Breadth-First Search (level-order traversal) starting from a given vertex.
 *               Returns an array of visited vertices in BFS order.
 *               Time Complexity: O(V + E)
 *
 * @method dfs - Performs Depth-First Search (pre-order traversal) starting from a given vertex.
 *               Returns an array of visited vertices in DFS order.
 *               Time Complexity: O(V + E)
 *
 * @method hasCycle - Checks if the graph contains a cycle.
 *                    Returns true if a cycle exists, false otherwise.
 *                    Time Complexity: O(V + E)
 *
 * @method printGraph - Prints the adjacency list representation of the graph.
 *                      Time Complexity: O(V + E)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}

class UndirectedGraph {
    constructor() {
        this.nodes = new Map();
    }

    addVertex(value) {
        if (!this.nodes.has(value)) {
            this.nodes.set(value, new Node(value));
        }
    }

    addEdge(source, destination) {
        if (!this.nodes.has(source)) {
            this.addVertex(source);
        }
        if (!this.nodes.has(destination)) {
            this.addVertex(destination);
        }

        const srcNode = this.nodes.get(source);
        const destNode = this.nodes.get(destination);

        // Ensure no duplicate edges
        if (!srcNode.neighbors.includes(destNode)) {
            srcNode.neighbors.push(destNode);
        }
        if (!destNode.neighbors.includes(srcNode)) {
            destNode.neighbors.push(srcNode);
        }
    }

    deleteVertex(value) {
        if (!this.nodes.has(value)) return;

        const vertex = this.nodes.get(value);
        for (const neighbor of vertex.neighbors) {
            neighbor.neighbors = neighbor.neighbors.filter((n) => n.value !== value);
        }

        this.nodes.delete(value);
    }

    deleteEdge(source, destination) {
        if (this.nodes.has(source) && this.nodes.has(destination)) {
            const srcNode = this.nodes.get(source);
            const destNode = this.nodes.get(destination);

            srcNode.neighbors = srcNode.neighbors.filter((n) => n.value !== destination);
            destNode.neighbors = destNode.neighbors.filter((n) => n.value !== source);
        }
    }

    bfs(startValue) {
        if (!this.nodes.has(startValue)) return [];

        const visited = new Set();
        const queue = [this.nodes.get(startValue)];
        const result = [];

        while (queue.length > 0) {
            const node = queue.shift();

            if (!visited.has(node.value)) {
                visited.add(node.value);
                result.push(node.value);

                for (const neighbor of node.neighbors) {
                    if (!visited.has(neighbor.value)) {
                        queue.push(neighbor);
                    }
                }
            }
        }

        return result;
    }

    dfs(startValue) {
        if (!this.nodes.has(startValue)) return [];

        const visited = new Set();
        const result = [];

        const dfsHelper = (node) => {
            if (!node || visited.has(node.value)) return;

            visited.add(node.value);
            result.push(node.value);

            for (const neighbor of node.neighbors) {
                dfsHelper(neighbor);
            }
        };

        dfsHelper(this.nodes.get(startValue));
        return result;
    }

    hasCycle() {
        const visited = new Set();

        const dfsCycleCheck = (node, parent) => {
            visited.add(node.value);

            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor.value)) {
                    if (dfsCycleCheck(neighbor, node)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    return true;
                }
            }

            return false;
        };

        for (const node of this.nodes.values()) {
            if (!visited.has(node.value)) {
                if (dfsCycleCheck(node, null)) return true;
            }
        }

        return false;
    }

    printGraph() {
        for (const node of this.nodes.values()) {
            const neighbors = node.neighbors.map((n) => n.value).join(", ");
            console.log(`${node.value} -> ${neighbors}`);
        }
    }
}

module.exports = UndirectedGraph;
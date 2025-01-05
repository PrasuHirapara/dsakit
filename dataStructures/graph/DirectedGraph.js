/**
 * DirectedGraph is a data structure to represent a directed graph using an adjacency list.
 * It supports operations such as adding vertices, adding and removing directed edges, performing traversals,
 * detecting cycles, and topological sorting.
 *
 * Methods:
 *
 * @method addVertex - Adds a new vertex to the graph.
 *                     Time Complexity: O(1)
 *
 * @method addEdge - Adds a directed edge from the source vertex to the destination vertex.
 *                   Time Complexity: O(1)
 *
 * @method deleteVertex - Removes a vertex and all associated edges from the graph.
 *                        Time Complexity: O(V + E)
 *
 * @method deleteEdge - Removes a directed edge from the source vertex to the destination vertex.
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
 * @method topologicalSort - Performs a topological sort on the graph (for DAGs).
 *                           Returns an array of vertices in topological order.
 *                           Time Complexity: O(V + E)
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

class DirectedGraph {
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
        this.nodes.get(source).neighbors.push(this.nodes.get(destination));
    }

    deleteVertex(value) {
        if (!this.nodes.has(value)) return;

        this.nodes.delete(value);

        for (const node of this.nodes.values()) {
            node.neighbors = node.neighbors.filter(
                (neighbor) => neighbor.value !== value
            );
        }
    }

    deleteEdge(source, destination) {
        if (this.nodes.has(source)) {
            this.nodes.get(source).neighbors = this.nodes
                .get(source)
                .neighbors.filter((neighbor) => neighbor.value !== destination);
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
        const recStack = new Set();

        const dfsCycleCheck = (node) => {
            if (!node || visited.has(node.value)) return false;

            visited.add(node.value);
            recStack.add(node.value);

            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor.value) && dfsCycleCheck(neighbor)) {
                    return true;
                } else if (recStack.has(neighbor.value)) {
                    return true;
                }
            }

            recStack.delete(node.value);
            return false;
        };

        for (const node of this.nodes.values()) {
            if (dfsCycleCheck(node)) return true;
        }

        return false;
    }

    topologicalSort() {
        const visited = new Set();
        const stack = [];

        const dfsTopSort = (node) => {
            visited.add(node.value);

            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor.value)) {
                    dfsTopSort(neighbor);
                }
            }

            stack.push(node.value);
        };

        for (const node of this.nodes.values()) {
            if (!visited.has(node.value)) {
                dfsTopSort(node);
            }
        }

        return stack.reverse();
    }

    printGraph() {
        for (const node of this.nodes.values()) {
            const neighbors = node.neighbors.map((n) => n.value).join(", ");
            console.log(`${node.value} -> ${neighbors}`);
        }
    }
}

module.exports = DirectedGraph;
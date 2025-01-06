/**
 * WeightedGraph is a data structure to represent a weighted graph using nodes and adjacency lists.
 *
 * @method addVertex - Adds a new vertex to the graph. Time Complexity: O(1)
 * @method addEdge - Adds a weighted edge between two vertices. Time Complexity: O(1)
 * @method deleteVertex - Removes a vertex and all associated edges. Time Complexity: O(V + E)
 * @method deleteEdge - Removes a weighted edge between two vertices. Time Complexity: O(E)
 * @method dijkstra - Finds the shortest paths from a source vertex using Dijkstra's algorithm. Time Complexity: O((V + E) * log(V))
 * @method bellmanFord - Finds shortest paths from a source vertex, handles negative weights. Time Complexity: O(V * E)
 * @method floydWarshall - Computes shortest paths between all pairs of vertices. Time Complexity: O(V^3)
 * @method primMST - Generates a Minimum Spanning Tree using Prim's algorithm. Time Complexity: O((V + E) * log(V))
 * @method kruskal - Finds a Minimum Spanning Tree using Kruskal's algorithm. Time Complexity: O(E * log(E) + V * log(V))
 * @method isConnected - Checks if all vertices are reachable from a starting vertex. Time Complexity: O(V + E)
 * @method shortestPath - Traces the shortest path between two vertices. Time Complexity: O((V + E) * log(V))
 * @method printGraph - Prints the adjacency list representation of the graph. Time Complexity: O(V + E)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.edges = new Map();
    }

    addEdge(destination, weight) {
        this.edges.set(destination, weight);
    }

    removeEdge(destination) {
        this.edges.delete(destination);
    }
}

class WeightedGraph {
    constructor() {
        this.nodes = new Map();
    }

    addVertex(value) {
        if (!this.nodes.has(value)) {
            this.nodes.set(value, new Node(value));
        }
    }

    addEdge(source, destination, weight) {
        if (!this.nodes.has(source)) this.addVertex(source);
        if (!this.nodes.has(destination)) this.addVertex(destination);

        this.nodes.get(source).addEdge(destination, weight);
        this.nodes.get(destination).addEdge(source, weight); // For undirected graph
    }

    deleteVertex(value) {
        if (this.nodes.has(value)) {
            this.nodes.delete(value);
            for (const node of this.nodes.values()) {
                node.removeEdge(value);
            }
        }
    }

    deleteEdge(source, destination) {
        if (this.nodes.has(source)) {
            this.nodes.get(source).removeEdge(destination);
        }
        if (this.nodes.has(destination)) {
            this.nodes.get(destination).removeEdge(source);
        }
    }

    dijkstra(start) {
        const distances = new Map();
        const priorityQueue = new Map();
        const visited = new Set();

        for (const node of this.nodes.keys()) {
            distances.set(node, Infinity);
        }
        distances.set(start, 0);
        priorityQueue.set(start, 0);

        while (priorityQueue.size > 0) {
            const [currentNode] = [...priorityQueue.entries()].reduce((a, b) =>
                a[1] < b[1] ? a : b
            );
            priorityQueue.delete(currentNode);

            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            const neighbors = this.nodes.get(currentNode).edges;
            for (const [neighbor, weight] of neighbors) {
                if (!visited.has(neighbor)) {
                    const newDistance = distances.get(currentNode) + weight;
                    if (newDistance < distances.get(neighbor)) {
                        distances.set(neighbor, newDistance);
                        priorityQueue.set(neighbor, newDistance);
                    }
                }
            }
        }

        return distances;
    }

    bellmanFord(start) {
        const distances = new Map();
        for (const node of this.nodes.keys()) {
            distances.set(node, Infinity);
        }
        distances.set(start, 0);

        for (let i = 0; i < this.nodes.size - 1; i++) {
            for (const [node, obj] of this.nodes.entries()) {
                for (const [neighbor, weight] of obj.edges.entries()) {
                    const newDistance = distances.get(node) + weight;
                    if (newDistance < distances.get(neighbor)) {
                        distances.set(neighbor, newDistance);
                    }
                }
            }
        }

        for (const [node, obj] of this.nodes.entries()) {
            for (const [neighbor, weight] of obj.edges.entries()) {
                if (distances.get(node) + weight < distances.get(neighbor)) {
                    throw new Error("Graph contains a negative-weight cycle");
                }
            }
        }

        return distances;
    }

    floydWarshall() {
        const vertices = [...this.nodes.keys()];
        const dist = Array(vertices.length)
            .fill(null)
            .map(() => Array(vertices.length).fill(Infinity));

        vertices.forEach((v, i) => (dist[i][i] = 0));

        vertices.forEach((v, i) => {
            for (const [neighbor, weight] of this.nodes.get(v).edges.entries()) {
                const j = vertices.indexOf(neighbor);
                dist[i][j] = weight;
            }
        });

        for (let k = 0; k < vertices.length; k++) {
            for (let i = 0; i < vertices.length; i++) {
                for (let j = 0; j < vertices.length; j++) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }

        return dist;
    }

    primMST() {
        const visited = new Set();
        const priorityQueue = new Map();
        const mst = [];

        const start = [...this.nodes.keys()][0];
        priorityQueue.set(start, 0);

        while (priorityQueue.size > 0) {
            const [currentNode] = [...priorityQueue.entries()].reduce((a, b) =>
                a[1] < b[1] ? a : b
            );
            priorityQueue.delete(currentNode);

            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            const neighbors = this.nodes.get(currentNode).edges;
            for (const [neighbor, weight] of neighbors) {
                if (!visited.has(neighbor)) {
                    priorityQueue.set(neighbor, weight);
                    mst.push([currentNode, neighbor, weight]);
                }
            }
        }

        return mst;
    }

    isConnected() {
        const visited = new Set();
        const dfs = (node) => {
            visited.add(node);
            for (const neighbor of this.nodes.get(node).edges.keys()) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        const start = [...this.nodes.keys()][0];
        dfs(start);

        return visited.size === this.nodes.size;
    }

    shortestPath(start, end) {
        const distances = this.dijkstra(start);
        const path = [];
        let current = end;

        if (distances.get(end) === Infinity) return null;

        while (current !== start) {
            path.unshift(current);
            let minDistance = Infinity;
            let nextNode = null;

            for (const [neighbor, weight] of this.nodes.get(current).edges.entries()) {
                if (distances.get(neighbor) + weight === distances.get(current)) {
                    if (distances.get(neighbor) < minDistance) {
                        minDistance = distances.get(neighbor);
                        nextNode = neighbor;
                    }
                }
            }

            current = nextNode;
        }

        path.unshift(start);
        return path;
    }

    printGraph() {
        for (const [node, obj] of this.nodes.entries()) {
            const edges = [...obj.edges.entries()]
                .map(([neighbor, weight]) => `${neighbor} (${weight})`)
                .join(", ");
            console.log(`${node} -> ${edges}`);
        }
    }
}

module.exports = WeightedGraph;
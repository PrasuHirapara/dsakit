/**
 * Dijkstra's Algorithm
 * Finds the shortest path from a starting node to all other nodes in the graph.
 *
 * @param {Object} graph - Adjacency list representation of the graph.
 *                        - Example: { A: { B: 1, C: 4 }, B: { C: 2, D: 6 }, ... }
 * @param {String} start - The starting node.
 * @returns {Object} - An object containing:
 *                     - `distances`: Shortest distances to each node.
 *                     - `previous`: Previous nodes in the shortest path.
 * 
 * Note: This algorithm is particularly efficient for very large graphs with sparse connections,
 *       especially when implemented with a priority queue for optimal performance.
 */

const PriorityQueue = require("../queue/priorityQueue");

function dijkstra(graph , start){
    const pq = new PriorityQueue();
    const distances = {};
    const previous = {};

    for(const node in graph){
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[start] = 0;
    pq.enqueue(start , 0);

    while (!pq.isEmpty()){
        const {data: currentNode} = pq.dequeue();

        for(const neighbor in graph[currentNode]){
            const weight = graph[currentNode][neighbor];
            const newDist = distances[currentNode] + weight;

            if(newDist < distances[neighbor]){
                distances[neighbor] = newDist;
                previous[neighbor] = currentNode;
                pq.enqueue(neighbor , newDist);
            }
        }
    }

    return {distances , previous};
}

module.exports = dijkstra;
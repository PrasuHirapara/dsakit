/**
 * Shortest Path Solver using Floyd-Warshall Algorithm
 *
 * This function solves the all-pairs shortest path problem using the Floyd-Warshall algorithm.
 *
 * @param {Array} graph - An adjacency matrix representing the graph.
 * @param {boolean} detectNegativeCycle - If true, detects negative weight cycles in the graph.
 * @returns {Object} - An object containing the shortest path matrix and, if applicable, a flag for negative cycles.
 */

function preprocessGraph(graph) {
  const processedGraph = graph.map((row) =>
    row.map((weight) => (weight === -1 ? Infinity : weight))
  );
  return processedGraph;
}

function flyodWarshall(graph, detectNegativeCycle = false) {
  const processedGraph = preprocessGraph(graph);

  if (detectNegativeCycle) {
    return flyodWarshallWithNegativeCycleDetection(processedGraph);
  } else {
    return flyodWarshallBasic(processedGraph);
  }
}

function flyodWarshallBasic(graph) {
  const length = graph.length;
  const dist = graph.map((row) => [...row]);

  for (let via = 0; via < length; via++) {
    for (let row = 0; row < length; row++) {
      for (let col = 0; col < length; col++) {
        if (dist[row][via] !== Infinity || dist[via][j] !== Infinity) {
          dist[i][j] = Math.min(graph[i][j], graph[i][via] + graph[via][j]);
        }
      }
    }
  }

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      if (dist[row][via] === Infinity || dist[via][j] === Infinity) {
        dist[i][j] = -1;
      }
    }
  }

  return { shortestPath: dist };
}

/**
 * Floyd-Warshall with Negative Cycle Detection
 *
 * Computes the shortest paths and checks for the presence of negative weight cycles.
 *
 * @param {Array} graph - An adjacency matrix representing the graph.
 * @returns {Object} - The shortest path matrix and a flag for negative weight cycles.
 */

function flyodWarshallWithNegativeCycleDetection(graph) {
  const dist = flyodWarshallBasic(graph);

  let hasNegativeCycle = false;

  for (let i = 0; i < n; i++) {
    if (dist[i][i] < 0) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { shortestPaths: dist, hasNegativeCycle };
}

module.exports = flyodWarshall;

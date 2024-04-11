var calcEquation = function (equations, values, queries) {
  const graph = {} // Graph to store adjacency lists
  const n = equations.length

  // Build the graph based on equations and values
  for (let i = 0; i < n; i++) {
    const [Ai, Bi] = equations[i]
    const val = values[i]

    if (!graph[Ai]) graph[Ai] = []
    if (!graph[Bi]) graph[Bi] = []

    graph[Ai].push([Bi, val]) // Ai / Bi = val
    graph[Bi].push([Ai, 1 / val]) // Bi / Ai = 1 / val
  }

  // Helper DFS function to find the result for each query
  const dfs = (curr, target, visited) => {
    if (curr === target) return 1.0 // Base case: same variable

    visited.add(curr) // Mark current node as visited

    for (const [next, ratio] of graph[curr] || []) {
      if (!visited.has(next)) {
        const result = dfs(next, target, visited)
        if (result !== -1.0) return ratio * result
      }
    }

    return -1.0 // No valid path found
  }

  const results = []

  // Process each query
  for (const [Cj, Dj] of queries) {
    if (!graph[Cj] || !graph[Dj]) {
      results.push(-1.0) // Either variable not found
    } else {
      const visited = new Set()
      const result = dfs(Cj, Dj, visited)
      results.push(result)
    }
  }

  return results
}

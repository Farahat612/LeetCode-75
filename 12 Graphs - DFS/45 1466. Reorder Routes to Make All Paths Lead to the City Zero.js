function minReorder(n, connections) {
  const g = Array.from({ length: n }, () => [])

  // Build the graph
  for (const [a, b] of connections) {
    g[a].push([b, 1]) // Road a -> b
    g[b].push([a, 0]) // Road b -> a (opposite direction)
  }

  // Depth-First Search (DFS) function
  const dfs = (a, fa) => {
    let ans = 0
    for (const [b, c] of g[a]) {
      if (b !== fa) {
        ans += c + dfs(b, a) // Calculate the sum of changes
      }
    }
    return ans
  }

  // Start DFS from city 0 with no parent (-1)
  return dfs(0, -1)
}

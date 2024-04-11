var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const visited = new Array(n).fill(false)
  let numProvinces = 0

  // Helper function for DFS traversal
  const dfs = (city) => {
    visited[city] = true
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor)
      }
    }
  }

  // Iterate over each city (node)
  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      // Found an unvisited city, start a new DFS traversal
      dfs(city)
      // Increment the province count
      numProvinces++
    }
  }

  return numProvinces
}

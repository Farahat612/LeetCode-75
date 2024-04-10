var pathSum = function (root, targetSum) {
  // Function to recursively count paths that sum up to targetSum
  const countPaths = (node, currentSum) => {
    if (!node) {
      return 0
    }

    // Update currentSum with the value of the current node
    currentSum += node.val

    // Initialize the count of valid paths
    let pathCount = 0

    // If currentSum matches the targetSum, increment pathCount
    if (currentSum === targetSum) {
      pathCount++
    }

    // Recursively count paths in the left and right subtrees
    pathCount += countPaths(node.left, currentSum)
    pathCount += countPaths(node.right, currentSum)

    return pathCount
  }

  // Function to perform DFS starting from the root node
  const dfs = (node) => {
    if (!node) {
      return 0
    }

    // Calculate paths starting from the current node
    const pathsFromNode = countPaths(node, 0)

    // Recursively explore paths from the left and right children
    const leftPaths = dfs(node.left)
    const rightPaths = dfs(node.right)

    // Return the sum of paths from the current node and its children
    return pathsFromNode + leftPaths + rightPaths
  }

  // Start DFS traversal from the root node
  return dfs(root)
}

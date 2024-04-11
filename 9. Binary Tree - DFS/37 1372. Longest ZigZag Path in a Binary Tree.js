// First submission --> Time Limit Exceeded
// var longestZigZag = function (root) {
//   let maxZigZag = 0

//   // Recursive function to traverse the tree and calculate zigzag paths
//   const dfs = (node, isLeft, length) => {
//     if (!node) {
//       return
//     }

//     // Update the maximum zigzag length
//     maxZigZag = Math.max(maxZigZag, length)

//     // Explore left child (zigzag to the left)
//     if (!isLeft) {
//       dfs(node.left, true, length + 1)
//     }

//     // Explore right child (zigzag to the right)
//     if (isLeft) {
//       dfs(node.right, false, length + 1)
//     }

//     // Explore right child (zigzag to the right)
//     dfs(node.right, false, 1)

//     // Explore left child (zigzag to the left)
//     dfs(node.left, true, 1)
//   }

//   // Start DFS traversal from the root node
//   dfs(root, true, 0)
//   dfs(root, false, 0)

//   return maxZigZag
// }

// Approach 2: Depth-First Search
var longestZigZag = function (root) {
  // Variable to track the maximum zigzag length encountered
  let maxZigZag = 0

  // Recursive DFS function to traverse the binary tree and update zigzag lengths
  const dfs = (node) => {
    if (!node) {
      return { left: -1, right: -1 } // Return invalid lengths for null nodes
    }

    // Recursively explore left and right children
    const leftLengths = dfs(node.left)
    const rightLengths = dfs(node.right)

    // Calculate zigzag lengths for the current node
    const leftZigZag = leftLengths.right + 1
    const rightZigZag = rightLengths.left + 1

    // Update the maximum zigzag length encountered
    maxZigZag = Math.max(maxZigZag, leftZigZag, rightZigZag)

    // Return zigzag lengths for the current node
    return { left: leftZigZag, right: rightZigZag }
  }

  // Start DFS traversal from the root node
  dfs(root)

  // Return the maximum zigzag length encountered during traversal
  return maxZigZag
}

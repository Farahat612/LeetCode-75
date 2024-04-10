/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

// Recursive function to perform DFS and count good nodes
const countGoodNodes = (node, maxSoFar) => {
  if (!node) {
    return 0
  }
  // Check if current node is a good node
  const isGoodNode = node.val >= maxSoFar
  // Calculate new max value for the path
  const newMax = Math.max(maxSoFar, node.val)
  // Recursively process left and right subtrees and accumulate counts
  const leftCount = countGoodNodes(node.left, newMax)
  const rightCount = countGoodNodes(node.right, newMax)
  // Return the count including the current node if it's good
  return (isGoodNode ? 1 : 0) + leftCount + rightCount
}

// Main function to count good nodes in the binary tree
var goodNodes = function (root) {
  // Start DFS from the root with an initial maximum value of negative infinity
  return countGoodNodes(root, -Infinity)
}

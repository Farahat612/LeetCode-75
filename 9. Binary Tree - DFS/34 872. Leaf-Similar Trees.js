/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

// Helper function to perform DFS and collect leaf node values into an array
const collectLeafValues = (root, leafValues) => {
  if (!root) {
    return
  }
  // If current node is a leaf (both left and right are null), collect its value
  if (!root.left && !root.right) {
    leafValues.push(root.val)
  }
  // Recursively process left and right subtrees
  collectLeafValues(root.left, leafValues)
  collectLeafValues(root.right, leafValues)
}

// Main function to check if two trees are leaf-similar
var leafSimilar = function (root1, root2) {
  // Arrays to store leaf node values for both trees
  const leafValues1 = []
  const leafValues2 = []

  // Collect leaf values for both trees using DFS
  collectLeafValues(root1, leafValues1)
  collectLeafValues(root2, leafValues2)

  // Check if the arrays of leaf values are identical
  if (leafValues1.length !== leafValues2.length) {
    return false
  }
  for (let i = 0; i < leafValues1.length; i++) {
    if (leafValues1[i] !== leafValues2[i]) {
      return false
    }
  }

  return true
}

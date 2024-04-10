/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // Base case: If the root is null (empty tree), return depth of 0
  if (!root) {
    return 0
  }

  // Recursively calculate the maximum depth of the left and right subtrees
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  // The maximum depth of the tree is the larger depth of the two subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1
}

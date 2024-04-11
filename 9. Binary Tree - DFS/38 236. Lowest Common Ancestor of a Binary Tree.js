var lowestCommonAncestor = function (root, p, q) {
  // Base case: if root is null or root matches either p or q, return root
  if (!root || root === p || root === q) {
    return root
  }

  // Recursively search for p and q in the left and right subtrees
  const leftLCA = lowestCommonAncestor(root.left, p, q)
  const rightLCA = lowestCommonAncestor(root.right, p, q)

  // If both leftLCA and rightLCA are not null, it means p and q are in different subtrees
  if (leftLCA && rightLCA) {
    return root // Therefore, root is the LCA
  } else if (leftLCA) {
    return leftLCA // p and q are in the left subtree
  } else {
    return rightLCA // p and q are in the right subtree
  }
}

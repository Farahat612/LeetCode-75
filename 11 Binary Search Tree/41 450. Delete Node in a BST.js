var deleteNode = function (root, key) {
  if (!root) {
    return null
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else {
    // Case 1: No children or one child
    if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    }

    // Case 2: Two children
    let successor = findSuccessor(root.right)
    root.val = successor.val
    root.right = deleteNode(root.right, successor.val)
  }

  return root
}

function findSuccessor(node) {
  while (node.left) {
    node = node.left
  }
  return node
}

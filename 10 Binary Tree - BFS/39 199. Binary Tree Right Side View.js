var rightSideView = function (root) {
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()

      // Only add the last node of each level (which is the rightmost node)
      if (i === size - 1) {
        result.push(node.val)
      }

      // Push the left and right children of the current node into the queue if they exist
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return result
}

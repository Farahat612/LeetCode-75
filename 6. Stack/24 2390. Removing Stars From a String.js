var removeStars = function (s) {
  const stack = []

  for (let char of s) {
    if (char !== '*') {
      stack.push(char)
    } else {
      if (stack.length > 0) {
        stack.pop() // Remove the closest non-star character to the left
      }
      // If stack is empty, skip adding this star to the stack
    }
  }

  return stack.join('') // Convert stack to string
}

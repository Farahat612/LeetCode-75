var asteroidCollision = function (asteroids) {
  const stack = []

  for (let asteroid of asteroids) {
    if (asteroid > 0) {
      // Positive asteroid, push onto the stack directly
      stack.push(asteroid)
    } else {
      // Negative asteroid (moving to the left), handle collision
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        // Top of the stack is smaller, pop it (it gets destroyed)
        stack.pop()
      }

      if (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] === Math.abs(asteroid)
      ) {
        // Both asteroids are of equal size, they destroy each other
        stack.pop()
      } else if (stack.length === 0 || stack[stack.length - 1] < 0) {
        // Top of the stack is a negative asteroid (or empty), push the current negative asteroid
        stack.push(asteroid)
      }
    }
  }

  return stack
}

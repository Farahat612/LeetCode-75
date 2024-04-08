function longestOnes(nums, k) {
  let left = 0
  let right = 0
  let maxOnes = 0
  let zeroCount = 0

  while (right < nums.length) {
    // If the current element is 0, increment zeroCount
    if (nums[right] === 0) {
      zeroCount++
    }

    // If zeroCount exceeds k, shrink the window from the left
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--
      }
      left++
    }

    // Update maxOnes with the current window size
    maxOnes = Math.max(maxOnes, right - left + 1)

    // Move the right pointer to the next element
    right++
  }

  return maxOnes
}

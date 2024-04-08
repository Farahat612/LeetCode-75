function findMaxAverageSubarray(nums, k) {
  let maxAverage = -Infinity // Initialize max average to negative infinity
  let currentSum = 0

  for (let i = 0; i < nums.length; i++) {
    // Add the current element to the current sum
    currentSum += nums[i]

    // Check if the window size has reached the desired length (k)
    if (i >= k - 1) {
      // Calculate the average for the current window
      const currentAverage = currentSum / k

      // Update the maximum average if necessary
      maxAverage = Math.max(maxAverage, currentAverage)

      // Remove the first element from the current sum for the next window
      currentSum -= nums[i - k + 1]
    }
  }

  return maxAverage
}

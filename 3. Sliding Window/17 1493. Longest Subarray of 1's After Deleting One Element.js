function longestSubarray(nums) {
  let left = 0
  let right = 0
  let maxOnes = 0
  let zerosSeen = 0

  while (right < nums.length) {
    if (nums[right] === 0) {
      zerosSeen++
    }

    // Slide window until zerosSeen <= 1 (can delete at most one zero)
    while (zerosSeen > 1) {
      if (nums[left] === 0) {
        zerosSeen--
      }
      left++
    }

    maxOnes = Math.max(maxOnes, right - left + 1)
    right++
  }

  return maxOnes - 1 // Subtract 1 to account for the deleted element
}

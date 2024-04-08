var moveZeroes = function (nums) {
  let left = 0
  let right = 0

  // Move all non-zero elements to the front of the array
  while (left < nums.length) {
    if (nums[left] !== 0) {
      nums[right] = nums[left]
      right++
    }
    left++
  }

  // Fill the remaining positions with zeroes
  while (right < nums.length) {
    nums[right] = 0
    right++
  }
}

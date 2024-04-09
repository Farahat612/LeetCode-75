var pivotIndex = function (nums) {
  const n = nums.length
  let totalSum = 0

  // Calculate the total sum of the array
  for (const num of nums) {
    totalSum += num
  }

  let leftSum = 0

  // Iterate through each index to find the pivot index
  for (let i = 0; i < n; i++) {
    const rightSum = totalSum - leftSum - nums[i]

    if (leftSum === rightSum) {
      return i
    }

    leftSum += nums[i]
  }

  return -1
}

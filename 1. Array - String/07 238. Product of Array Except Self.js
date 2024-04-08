var productExceptSelf = function (nums) {
  const n = nums.length
  const prefixProducts = new Array(n).fill(1)
  const suffixProducts = new Array(n).fill(1)
  const answer = new Array(n).fill(0)

  // Compute prefix products
  for (let i = 1; i < n; i++) {
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1]
  }

  // Compute suffix products
  for (let i = n - 2; i >= 0; i--) {
    suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1]
  }

  // Compute answer using prefix and suffix products
  for (let i = 0; i < n; i++) {
    answer[i] = prefixProducts[i] * suffixProducts[i]
  }

  return answer
}

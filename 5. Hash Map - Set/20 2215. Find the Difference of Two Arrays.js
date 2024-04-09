var findDifference = function (nums1, nums2) {
  // Convert nums1 and nums2 into sets
  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)

  // Initialize result sets to keep track of distinct values
  const result1Set = new Set()
  const result2Set = new Set()

  // Find distinct integers in nums1 not present in nums2
  for (const num of nums1) {
    if (!nums2Set.has(num) && !result1Set.has(num)) {
      result1Set.add(num)
    }
  }

  // Find distinct integers in nums2 not present in nums1
  for (const num of nums2) {
    if (!nums1Set.has(num) && !result2Set.has(num)) {
      result2Set.add(num)
    }
  }

  // Convert result sets to lists
  const result1 = [...result1Set]
  const result2 = [...result2Set]

  // Return the results as a list
  return [result1, result2]
}

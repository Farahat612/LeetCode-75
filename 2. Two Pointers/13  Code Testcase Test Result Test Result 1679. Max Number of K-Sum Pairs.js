function maxOperations(nums, k) {
  // Use a hash table to store the frequency of each number
  const numCounts = {}
  let operations = 0

  for (const num of nums) {
    const complement = k - num

    // Check if the complement exists in the hash table
    if (numCounts[complement] > 0) {
      operations++ // Found a pair, increment operations and decrement complement count
      numCounts[complement]--
    } else {
      // Add the current number to the hash table (or increment count if already present)
      numCounts[num] = (numCounts[num] || 0) + 1
    }
  }

  return operations
}

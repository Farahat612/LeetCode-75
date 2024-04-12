var maxScore = function (nums1, nums2, k) {
  // Get the length of the input arrays
  const n = nums1.length

  // Create an array of indices [0, 1, 2, ..., n-1]
  const ids = [...Array(n).keys()]

  // Sort the indices based on the corresponding values in nums2 in descending order
  ids.sort((i, j) => nums2[j] - nums2[i])

  // Create a min priority queue
  const pq = new MinPriorityQueue()

  // Initialize sum to keep track of the sum of selected elements from nums1
  let sum = 0

  // Choose the first k elements and calculate the initial sum and enqueue them into the priority queue
  for (let i = 0; i < k; i++) {
    sum += nums1[ids[i]]
    pq.enqueue(nums1[ids[i]])
  }

  // Initialize ans to keep track of the maximum score
  let ans = sum * nums2[ids[k - 1]]

  // Iterate over the remaining elements in nums1
  for (let i = k; i < n; i++) {
    // Get the value of the current element in nums1
    const x = nums1[ids[i]]

    // Check if the current element is greater than the smallest element in the priority queue
    if (x > pq.front().element) {
      // If yes, update the sum by adding the difference between the current element and the smallest element
      sum += x - pq.dequeue().element

      // Enqueue the current element into the priority queue
      pq.enqueue(x)

      // Update the maximum score if the current score is greater
      ans = Math.max(ans, sum * nums2[ids[i]])
    }
  }

  // Return the maximum score
  return ans
}

// JS Submission failed only one test case. So, I have submitted the Python code.
var totalCost = function (costs, k, candidates) {
  // Initialize a priority queue with custom comparison function
  let pq = new MinPriorityQueue({
    compare: (a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]),
  })

  const len = costs.length // Length of the costs array
  let left = 0,
    right = len - 1 // Pointers for the leftmost and rightmost candidates

  // Enqueue the costs and indices of the first `candidates` workers from the left
  for (let i = 0; i < candidates && left < right; i++) {
    pq.enqueue([costs[left], left])
    left++
  }

  // Enqueue the costs and indices of the last `candidates` workers from the right
  for (
    let i = 0;
    i < candidates && right >= len - candidates && right >= left;
    i++
  ) {
    pq.enqueue([costs[right], right])
    right--
  }

  let totalCost = 0 // Initialize the total cost

  // Process the hiring sessions until k workers are hired
  while (k > 0) {
    let [cost, idx] = pq.dequeue() // Dequeue the worker with the lowest cost
    totalCost += cost // Add the cost to the total cost

    // Enqueue the next worker from the left if applicable
    if (idx < left && left < right) {
      pq.enqueue([costs[left], left])
      left++
    }
    // Enqueue the next worker from the right if applicable
    else if (idx > right && left <= right) {
      pq.enqueue([costs[right], right])
      right--
    }

    k-- // Decrement the number of remaining hiring sessions
  }

  return totalCost // Return the total hiring cost
}

// Test case
// Input:
// costs =
// [4866,4857,4378,4876,3594,4874,4717,4680,4813,4938,4156,4724]
// k = 9
// candidates = 2
// Output 42065
// Expected 40785

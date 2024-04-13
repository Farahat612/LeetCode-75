// JS Submission failed only one test case. So, I have submitted the Python code.

// var totalCost = function (costs, k, candidates) {
//   // Initialize a priority queue with custom comparison function
//   let pq = new MinPriorityQueue({
//     compare: (a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]),
//   })

//   const len = costs.length // Length of the costs array
//   let left = 0,
//     right = len - 1 // Pointers for the leftmost and rightmost candidates

//   // Enqueue the costs and indices of the first `candidates` workers from the left
//   for (let i = 0; i < candidates && left < right; i++) {
//     pq.enqueue([costs[left], left])
//     left++
//   }

//   // Enqueue the costs and indices of the last `candidates` workers from the right
//   for (
//     let i = 0;
//     i < candidates && right >= len - candidates && right >= left;
//     i++
//   ) {
//     pq.enqueue([costs[right], right])
//     right--
//   }

//   let totalCost = 0 // Initialize the total cost

//   // Process the hiring sessions until k workers are hired
//   while (k > 0) {
//     let [cost, idx] = pq.dequeue() // Dequeue the worker with the lowest cost
//     totalCost += cost // Add the cost to the total cost

//     // Enqueue the next worker from the left if applicable
//     if (idx < left && left < right) {
//       pq.enqueue([costs[left], left])
//       left++
//     }
//     // Enqueue the next worker from the right if applicable
//     else if (idx > right && left <= right) {
//       pq.enqueue([costs[right], right])
//       right--
//     }

//     k-- // Decrement the number of remaining hiring sessions
//   }

//   return totalCost // Return the total hiring cost
// }

// Because JavaScript does not have a built-in heap data structure. So, I have used a third-party library called `js-priority-queue` to implement a min heap. The library is not available in the LeetCode environment. That's why the submission failed. The Python code is working fine.

// const PriorityQueue = require('js-priority-queue')
// var totalCost = function (costs, k, candidates) {
//   let total = 0
//   let firstHeap = new PriorityQueue({
//     comparator: (a, b) => a[0] - b[0] || a[1] - b[1],
//   })
//   let lastHeap = new PriorityQueue({
//     comparator: (a, b) => a[0] - b[0] || a[1] - b[1],
//   })

//   for (let i = 0; i < candidates; i++) {
//     firstHeap.queue([costs[i], i])
//   }
//   for (let i = costs.length - 1; i >= costs.length - candidates; i--) {
//     lastHeap.queue([costs[i], i])
//   }

//   for (let i = 0; i < k; i++) {
//     if (firstHeap.peek()[0] <= (lastHeap.peek() || [Infinity])[0]) {
//       let [cost, index] = firstHeap.dequeue()
//       total += cost
//       if (lastHeap.array.some(([_, i]) => i === index)) {
//         lastHeap.removeOne(([_, i]) => i === index)
//       }
//     } else {
//       let [cost, index] = lastHeap.dequeue()
//       total += cost
//       if (firstHeap.array.some(([_, i]) => i === index)) {
//         firstHeap.removeOne(([_, i]) => i === index)
//       }
//     }
//   }

//   return total
// }

// Test case
// Input:
// costs =
// [4866,4857,4378,4876,3594,4874,4717,4680,4813,4938,4156,4724]
// k = 9
// candidates = 2
// Output 42065
// Expected 40785

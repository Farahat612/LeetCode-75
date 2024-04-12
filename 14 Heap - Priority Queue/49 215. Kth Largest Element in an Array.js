// Submission 01 Exeeded Time Limit
// function findKthLargest(nums, k) {
//   // Get the length of the array
//   const n = nums.length

//   // Function to swap two elements in the array
//   const swap = (i, j) => {
//     ;[nums[i], nums[j]] = [nums[j], nums[i]]
//   }

//   // Quickselect algorithm to find the kth largest element
//   const sort = (l, r) => {
//     // Base case: If there are fewer than k elements or the range is invalid, return
//     if (l + 1 > k || l >= r) {
//       return
//     }

//     // Randomly select a pivot element and move it to the beginning of the range
//     swap(l, l + Math.floor(Math.random() * (r - l)))
//     const num = nums[l] // Pivot value
//     let mark = l // Mark the position to partition the array

//     // Partition the array around the pivot
//     for (let i = l + 1; i < r; i++) {
//       if (nums[i] > num) {
//         // If the current element is larger than the pivot
//         mark++ // Move the mark to the right
//         swap(i, mark) // Swap the current element with the element at the mark
//       }
//     }
//     swap(l, mark) // Move the pivot to its correct position

//     // Recursively sort the left and right partitions
//     sort(l, mark)
//     sort(mark + 1, r)
//   }

//   // Call the sort function with the entire array range
//   sort(0, n)

//   // Return the kth largest element (kth element from the end after sorting)
//   return nums[k - 1]
// }

// Submission 02 Exeeded Time Limit
// function findKthLargest(nums, k) {
//   // Get the length of the array
//   const n = nums.length

//   // Function to swap two elements in the array
//   const swap = (i, j) => {
//     ;[nums[i], nums[j]] = [nums[j], nums[i]]
//   }

//   // Quickselect algorithm to find the kth largest element
//   const sort = (l, r) => {
//     // Base case: If there are fewer than k elements or the range is invalid, return
//     if (l + 1 > k || l >= r) {
//       return
//     }

//     // Randomly select a pivot element and move it to the beginning of the range
//     swap(l, l + Math.floor(Math.random() * (r - l)))
//     const num = nums[l] // Pivot value
//     let mark = l // Mark the position to partition the array

//     // Partition the array around the pivot
//     for (let i = l + 1; i < r; i++) {
//       if (nums[i] > num) {
//         // If the current element is larger than the pivot
//         mark++ // Move the mark to the right
//         swap(i, mark) // Swap the current element with the element at the mark
//       }
//     }
//     swap(l, mark) // Move the pivot to its correct position

//     // Recursively sort the left and right partitions
//     sort(l, mark)
//     sort(mark + 1, r)
//   }

//   // Call the sort function with the entire array range
//   sort(0, n)

//   // Return the kth largest element (kth element from the end after sorting)
//   return nums[k - 1]
// }

// Submission 03 using Quickselect algorithm Exeeded Time Limit
// function findKthLargest(nums, k) {
//   const n = nums.length
//   const swap = (i, j) => {
//     ;[nums[i], nums[j]] = [nums[j], nums[i]] // Function to swap two elements in the array
//   }

//   // Partition function to find the correct position of the pivot element
//   const partition = (left, right) => {
//     const randomIndex = left + Math.floor(Math.random() * (right - left + 1)) // Choose a random index within the range
//     const pivot = nums[randomIndex] // Choose the pivot element
//     swap(randomIndex, right) // Move the pivot element to the end
//     let i = left - 1 // Initialize the index of the smaller element
//     for (let j = left; j < right; j++) {
//       if (nums[j] <= pivot) {
//         // If current element is less than or equal to pivot
//         i++ // Increment index of smaller element
//         swap(i, j) // Swap current element with the element at index i
//       }
//     }
//     swap(i + 1, right) // Swap pivot element with element at index (i + 1)
//     return i + 1 // Return the partitioning index
//   }

//   let left = 0 // Initialize left pointer
//   let right = n - 1 // Initialize right pointer
//   while (left <= right) {
//     // Loop until left pointer crosses right pointer
//     const pivotIndex = partition(left, right) // Find the partitioning index
//     const kthLargestIndex = n - k // Calculate the index of the kth largest element
//     if (pivotIndex === kthLargestIndex)
//       return nums[
//         pivotIndex
//       ] // If partitioning index is equal to kth largest index, return the element at that index
//     else if (pivotIndex < kthLargestIndex)
//       left =
//         pivotIndex +
//         1 // If partitioning index is less than kth largest index, search in the right partition
//     else right = pivotIndex - 1 // If partitioning index is greater than kth largest index, search in the left partition
//   }

//   return -1 // Not found
// }

// Submission 04 using OOP Accepted
class MinHeap {
  constructor() {
    this.heap = [] // Initialize an empty array to store the heap elements
  }

  // Function to insert a new element into the heap
  insert(val) {
    this.heap.push(val) // Add the new element to the end of the heap array
    this.heapifyUp(this.heap.length - 1) // Restore the min-heap property by performing heapify-up operation
  }

  // Function to extract the minimum element from the heap
  extractMin() {
    if (this.heap.length === 0) return null // If the heap is empty, return null
    if (this.heap.length === 1) return this.heap.pop() // If there's only one element in the heap, remove and return it

    const min = this.heap[0] // Store the minimum element (root) of the heap
    this.heap[0] = this.heap.pop() // Replace the root with the last element of the heap
    this.heapifyDown(0) // Restore the min-heap property by performing heapify-down operation starting from the root
    return min // Return the minimum element
  }

  // Function to restore the min-heap property by moving an element up the heap
  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2) // Calculate the index of the parent node
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      // While the current node is not the root and violates the min-heap property
      this.swap(parent, index) // Swap the current node with its parent
      index = parent // Update the index to the parent index
      parent = Math.floor((index - 1) / 2) // Update the parent index
    }
  }

  // Function to restore the min-heap property by moving an element down the heap
  heapifyDown(index) {
    let smallest = index // Assume the current node is the smallest
    const left = 2 * index + 1 // Calculate the index of the left child
    const right = 2 * index + 2 // Calculate the index of the right child
    const size = this.heap.length // Get the size of the heap

    if (left < size && this.heap[left] < this.heap[smallest]) {
      // If the left child exists and is smaller than the current node
      smallest = left // Update the index of the smallest node
    }

    if (right < size && this.heap[right] < this.heap[smallest]) {
      // If the right child exists and is smaller than the current node or left child
      smallest = right // Update the index of the smallest node
    }

    if (smallest !== index) {
      // If the smallest node is not the current node
      this.swap(smallest, index) // Swap the current node with the smallest node
      this.heapifyDown(smallest) // Recursively heapify-down from the smallest node
    }
  }

  // Function to swap two elements in the heap
  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] // Swap the elements at indices i and j
  }

  // Function to get the minimum element (root) of the heap without removing it
  peek() {
    return this.heap[0] // Return the root element of the heap
  }

  // Function to get the size (number of elements) of the heap
  size() {
    return this.heap.length // Return the length of the heap array
  }
}

// Function to find the kth largest element in an array using a min-heap
var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap() // Create a new instance of the MinHeap class

  // Insert the first k elements of the array into the min-heap
  for (let i = 0; i < k; i++) {
    minHeap.insert(nums[i])
  }

  // Iterate over the remaining elements of the array
  for (let i = k; i < nums.length; i++) {
    // If the current element is greater than the minimum element (root) of the min-heap
    if (nums[i] > minHeap.peek()) {
      minHeap.extractMin() // Remove the minimum element from the min-heap
      minHeap.insert(nums[i]) // Insert the current element into the min-heap
    }
  }

  return minHeap.peek() // Return the minimum element (root) of the min-heap, which is the kth largest element
}

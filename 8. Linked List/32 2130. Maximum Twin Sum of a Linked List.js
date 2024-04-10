// Function to find the maximum twin sum of a linked list. The twin sum is defined as the sum of nodes that are equidistant from the start and end of the linked list.
var pairSum = function (head) {
  // Initialize two pointers, slow and fast. The fast pointer will move at twice the speed of the slow pointer.
  let slow = head
  let fast = head

  // Move the fast pointer two nodes at a time and the slow pointer one node at a time. The loop ends when fast reaches the end of the list.
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // Reverse the second half of the linked list, starting from the slow pointer.
  let prev = null
  while (slow) {
    const next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }

  // The 'prev' pointer now points to the head of the reversed second half of the list. 'head' points to the beginning of the first half.

  // Initialize 'maxSum' to keep track of the maximum twin sum.
  let maxSum = 0

  // Iterate through both halves of the list.
  let left = head
  let right = prev

  // Calculate the twin sum by adding values of 'left' and 'right' pointers and update 'maxSum' if a larger sum is found.
  while (left && right) {
    maxSum = Math.max(maxSum, left.val + right.val)
    left = left.next
    right = right.next
  }

  // Return the maximum twin sum after traversing the entire list.
  return maxSum
}

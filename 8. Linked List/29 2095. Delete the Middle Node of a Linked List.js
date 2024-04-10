/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

var deleteMiddle = function (head) {
  // Edge case: Empty list or single node list
  if (!head || !head.next) {
    return null
  }

  let slow = head
  let fast = head
  let prev = null

  // Use slow and fast pointers to find the middle node
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  // Now slow is at the middle node, delete it
  if (prev) {
    // Update the next pointer of the previous node
    prev.next = slow.next
  } else {
    // If prev is null, it means we're deleting the head node
    head = head.next
  }

  return head
}

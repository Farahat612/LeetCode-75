/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative Approach
var reverseList = function (head) {
  let prev = null
  let curr = head

  while (curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev // prev will be the new head of the reversed list
}

// Recursive Approach
var reverseListRecursive = function (head) {
  // Base case: If the head is null or the list has only one node
  if (!head || !head.next) {
    return head
  }

  // Recursively reverse the sublist starting from head.next
  let reversedHead = reverseListRecursive(head.next)

  // Reverse the link for the head node
  head.next.next = head
  head.next = null

  return reversedHead // reversedHead will be the new head of the reversed list
}

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
var oddEvenList = function (head) {}
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
var oddEvenList = function (head) {
  // Edge case: Empty list or single node
  if (!head || !head.next) {
    return head
  }

  let oddHead = head
  let evenHead = head.next
  let odd = oddHead
  let even = evenHead

  while (even && even.next) {
    odd.next = even.next // Connect odd to the next odd node
    odd = odd.next
    even.next = odd.next // Connect even to the next even node
    even = even.next
  }

  // Connect the end of the odd list to the start of the even list
  odd.next = evenHead

  // Set the end of the even list to null
  if (even) {
    even.next = null
  }

  return oddHead
}

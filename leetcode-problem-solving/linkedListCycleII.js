/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head;
  let slow = head;
  
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
        slow = head;
        while (fast !== slow) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
  }

  return null
};

/**
 * Input: head = [3,2,0,-4], pos = 1
 * Output: tail connects to node index 1
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 */

/**
 * Input: head = [1,2], pos = 0
 * Output: tail connects to node index 0
 * Explanation: There is a cycle in the linked list, where tail connects to the first node.
 */

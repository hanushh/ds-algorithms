// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {


    var o = new ListNode(), oc = o, l1current = l1, l2current = l2, carry = 0;


    while (l1current || l2current || (carry > 0)) {

        let l1value = (l1current && l1current.val) ? l1current.val : 0;
        let l2value = (l2current && l2current.val) ? l2current.val : 0;

        let sum = carry + l1valuealue + l2value;
        oc.val = sum % 10;

        carry = (sum > 9) ? (Math.floor(sum / 10)) : 0;

        l1current = l1current && l1current.next;
        l2current = l2current && l2current.next;

        if (l1current || l2current || (carry > 0)) {
            oc.next = new ListNode();

            oc = oc.next;
        }

    }
    return o;


};
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
var addTwoNumbers = function(l1, l2) {
    
    
    var o = new ListNode(), oc= o,l1c=l1,l2c=l2, carry=0;
    
    
    while(l1c || l2c  || (carry >0)){
        
        let l1v = (l1c && l1c.val)?l1c.val : 0;
        let l2v = (l2c && l2c.val)?l2c.val : 0;
        
        let sum = carry +l1v + l2v;
        oc.val = sum % 10;
        
        carry = (sum >9)?(Math.floor(sum/10)):0;
        
        l1c = l1c && l1c.next;
        l2c = l2c && l2c.next;
        
        if(l1c || l2c || (carry >0)){
            oc.next =new ListNode();
            
            oc = oc.next;
        }
        
    }
    return o;
    
    
};
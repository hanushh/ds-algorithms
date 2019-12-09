// https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    
    
    function cmp (a,b){
        let flag=true;
        
        if (a == null && b == null) return true;
        // one of p and q is null
        if (a == null || b == null) return false;

        
        flag = flag && cmp(a.left, b.left);
        flag = flag && cmp(a.right, b.right);
        flag = flag && (a.val ===b.val);
        
        return flag;
        
        
    }
    
    
    return cmp(p,q);
    
};
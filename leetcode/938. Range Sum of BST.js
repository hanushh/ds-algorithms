// https://leetcode.com/problems/range-sum-of-bst
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
    /// if L >= c = go right
    /// if L < c = go left
    // if R > c = go left
    // if R < c = return null
    let sum = 0;
    function helper(current) {
        
        if(!current) return;
        
        if(current.val >= L && current.val <= R){
            sum += current.val;
        }
        
        if(current.val > L ){
            helper(current.left);
        }
        
        if(current.val < R){   
            helper(current.right);
        }
        
    }
    helper(root);
    return sum;  
};
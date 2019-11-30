// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    var o = [];
    var helper = function(current){
        
        if(!current){
            return;
        }
            helper(current.left);
            o.push(current.val);
            helper(current.right);
    };
        
        helper(root);

    return o;
    
};
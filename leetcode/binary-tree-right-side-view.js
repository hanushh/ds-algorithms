// https://leetcode.com/problems/binary-tree-right-side-view/

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


var rightSideView = function(root) {
    var outputArr = [];
    
    function getRightSideVal(node, depth){
        if(!Array.isArray(outputArr[depth]) && (node.left || node.right)){
                outputArr[depth] = [];
        }
        
        if(node.left){
            outputArr[depth].push(node.left.val);
            getRightSideVal(node.left, depth+1);
        }
        if(node.right){
            outputArr[depth].push(node.right.val);
            getRightSideVal(node.right, depth+1);
        }
        
        
    }
    
    if(root){
        outputArr[0] = [];
        outputArr[0].push(root.val);
        getRightSideVal(root,1);
        
        return outputArr.map(function(depthArr){
            return depthArr.pop();
        });  
        
    } else {
        return [];
    }
    
    
    
};
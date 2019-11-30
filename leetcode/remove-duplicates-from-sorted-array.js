// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let l=0,r=1;
    
    while(l<r && (r<nums.length)){
        
        if(nums[l] === nums[r]){
            
            nums.splice(r,1);
        } else{
            l++;
            r++;
        }
    }
    
    return nums.length;
    
};
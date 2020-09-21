import java.util.Arrays;

// https://leetcode.com/problems/remove-element/submissions/

class Solution {
    public static int removeElement(int[] nums, int val) {
        
        
        int numSize = nums.length;
        int i = 0;
        while(i < numSize) {
            
            if(nums[i]==val){
                
                int tmp= nums[i];
                
                numSize--;
                for(int j = numSize; j >= i; j--){
                    
                    int t = nums[j];
                    nums[j] = tmp;
                    tmp = t;
                    
                }
            } else {
                i++;
            }
        }

        return numSize;
        
    }

     public static void main(String[] args) {
        
        int[] a = {3,2,2,3};
        System.out.println(removeElement(a, 2));
        System.out.println(Arrays.toString(a));
    }
}
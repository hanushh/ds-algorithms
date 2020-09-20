import java.util.*;
// https://leetcode.com/problems/two-sum/solution/
public class TwoSum {
    public int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] { i, map.get(complement) };
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    
    }

    public static void main(String[] args) {
        TwoSum ts = new TwoSum();
        int[] ip = { 2,3, 3 };
        int[] o=ts.twoSum(ip, 6);
        System.out.println(o[0] +","+ o[1]);
    }
}

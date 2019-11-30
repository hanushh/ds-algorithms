
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    

    var bounds;

    function bs(array, searchVal, start, end) {

        var middle = Math.floor((end + start) / 2);

        if (  ( (start === end) && (array[start] !== searchVal) )  || start > end) {
            bounds= [-1, -1];
        } else if (array[middle] < searchVal) {

            bs(array, searchVal, middle + 1, end);
        }
        else if (array[middle] > searchVal) {

            bs(array, searchVal, start, middle - 1);
        }
        else if (array[middle] == searchVal) {
            bounds = findBounds(array, start, middle, end);
            return;
        }




    }


    function findBounds(arr, start, middle, end) {

        //reverse search
        let o = [], boundStart = start, boundEnd = end;

        for (var j = middle; j >= 0; j--) {

            if (arr[j] !== arr[middle]) {

                boundStart = j + 1;
                break;
            }

        }


        for (var k = middle; k <= arr.length; k++) {

            if (arr[k] !== arr[middle]) {

                boundEnd = k - 1;
                break;
            }
        }


        o.push(boundStart);
        o.push(boundEnd);


        return o;

    }
    bs(nums, target, 0, nums.length - 1)
    return bounds;
};
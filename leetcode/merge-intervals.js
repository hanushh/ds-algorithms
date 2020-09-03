// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {



    let mergedIntervals = [];



    const sortedIntervals = intervals.sort((a, b) => {

        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }

        // names must be equal
        return 0;
    });


    sortedIntervals.forEach(interval => {

        if (mergedIntervals.length === 0) {
            mergedIntervals.push(interval);
            return;
        }

        let lastInterval = mergedIntervals[mergedIntervals.length - 1]


        if (lastInterval[1] < interval[0]) {
            mergedIntervals.push(interval);
        } else if (lastInterval[1] < interval[1]) {
            lastInterval[1] = interval[1];
        }


    });

    console.log("Input:", intervals, "\nOutput:", mergedIntervals)



};


merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
merge([[1, 4], [2, 3]]);
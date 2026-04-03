/*
Write a function mergeRanges that takes an intervalsay of meeting time ranges and
returns an intervalsay of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals intervalsay will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/intervalsay/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

export const mergeRanges = (intervals: number[][]): number[][] => {
  let n = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];

    // Checking for all possible overlaps
    for (let i = 0; i < n; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        // Skipping already merged intervals
        if (res.length > 0 && res[res.length - 1][1] >= end) {
            continue;
        }

        // Find the end of the merged range
        for (let j = i + 1; j < n; j++) {
            if (intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1]);
            }
        }
        res.push([start, end]);
    }
    return res;
};

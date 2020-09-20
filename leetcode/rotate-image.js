// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const N = matrix.length - 1;

    for (let i = 0; i <= N / 2; i++) {

        let matrixI = matrix[i];

        for (let j = i; j < N - i; j++) {

            let temp = matrixI[j];
            matrix[i][j] = matrix[N - j][i];
            matrix[N - j][i] = matrix[N - i][N - j];
            matrix[N - i][N - j] = matrix[j][N - i];
            matrix[j][N - i] = temp;


        }
    }
};

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(`Input:`, mat);
rotate(mat)
console.log('Output:', mat);
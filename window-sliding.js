class WindowSliding {


    constructor() {

        let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
        let k = 4;

        let maxSum = 0;
        for (let i = 0; i < k; i++) {

            maxSum += arr[i];

        }

        let windowSum = maxSum;

        for (let j = k; j < arr.length; j++) {
            windowSum = windowSum - arr[j-k] + arr[j];
            maxSum = (windowSum > maxSum) ? windowSum : maxSum;
        }

        console.log('window-slide', arr,' Output:', maxSum);

    }
}



new WindowSliding();
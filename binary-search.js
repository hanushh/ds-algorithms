class BinarySearch {
    constructor() {


        let arr = [2, 5, 6, 8, 11, 15, 19];
        
        console.log('Binary Search:', this.performBS(arr, 0, (arr.length - 1), 3));

    }

    performBS(arr, l, r, searchVal) {

        let middle = Math.floor((l + r) / 2),
            middleVal = arr[middle];

        if ((l == r) || (l > r)) {
            return -1;
        } else if (searchVal === middleVal) {

            return middle;
        } else if (searchVal < middleVal) {

            return this.performBS(arr, l, middle - 1, searchVal);

        } else if (searchVal > middleVal) {

            return this.performBS(arr, middle - 1, r, searchVal);

        }


    }
}



new BinarySearch();
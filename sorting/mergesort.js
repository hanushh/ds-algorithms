function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const left = arr.slice(0, middle);

    const right = arr.slice(middle);
    const merged = merge(mergeSort(left), mergeSort(right));

    console.log(`Merging ${left} & ${right} from array ${arr}: ${merged}`)
    return merged;

}


function merge(left, right) {

    let resultArr = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {

            resultArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArr
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));

}
let input = [7, 8, 33, 22, 11, 9, 3];
console.log(`input: `,input)
console.log(mergeSort(input));
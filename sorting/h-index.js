/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let N = citations.length;
    if (N === 0) return 0;

    let sorted = citations.sort((a, b) => (b - a));
    let hIndex = 0;

    for (let i = 0; i < N; i++) {

        if (sorted[i] === 0) {
            continue;
        }
        if (i === (N - 1)) {
            if (sorted[i] <= (i + 1)) {

                hIndex = sorted[i];


            } else if (sorted[i] > (i + 1)) {
                hIndex = i + 1;

            }

        } else if (sorted[i] <= (i + 1)) {
            hIndex = i + 1;
            break;
        }
    }

    return hIndex;
};


let ip = [1,3,1];
console.log(hIndex(ip))
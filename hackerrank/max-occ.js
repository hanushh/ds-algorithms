
function maximumOccurringCharacter(text) {
    // Write your code here

    let txtArr = text.split(''), hashMap = new Map();

    for (let i = 0; i < txtArr.length; i++) {
        if (hashMap.has(txtArr[i])) {
            let incremented = hashMap.get(txtArr[i]) + 1;

            hashMap.set(txtArr[i], incremented);
        } else {
            hashMap.set(txtArr[i], 1);
        }

    }

    let hashKeys = Array.from(hashMap.keys());
    hashKeys.sort((a, b) => (hashMap[b] - hashMap[a]));
    return hashKeys[0];
}
console.log(maximumOccurringCharacter("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"));
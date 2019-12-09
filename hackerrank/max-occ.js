
function maximumOccurringCharacter(text) {
    // Write your code here

    let txtArr = text.split(''), hashMap = {};

    for (let i = 0; i < txtArr.length; i++) {
        if (hashMap[txtArr[i]]) {
            hashMap[txtArr[i]]++;
        } else {
            hashMap[txtArr[i]] = 1;
        }

    }

    let hashKeys = Object.keys((hashMap));
    hashKeys.sort((a, b) => (hashMap[b] - hashMap[a]));
    console.log(hashMap, hashKeys);
    return hashKeys[0];
}
console.log(maximumOccurringCharacter("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"));
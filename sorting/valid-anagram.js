// https://leetcode.com/problems/valid-anagram/submissions/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return (Array.from(s).sort().join("") === Array.from(t).sort().join(""));
};


console.log(isAnagram("anagram", "nagaram"));
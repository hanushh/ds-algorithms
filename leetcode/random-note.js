// https://leetcode.com/problems/ransom-note/submissions/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rNMap = {}; 
    let mMap = {};
    Array.from(ransomNote).forEach(rN=> {
        if(rNMap[rN]){
            rNMap[rN]++;
        } else {
            rNMap[rN] = 1;
        }
    
    });
    
    Array.from(magazine).forEach(m=>{
        if(mMap[m]){
            mMap[m]++;
        } else {
            mMap[m]=1;
        }
    });
    for (let key in rNMap){ 
        if((rNMap[key] > mMap[key]) || (!mMap[key])){
            return false;
        }
    }
    
    return true;    

};
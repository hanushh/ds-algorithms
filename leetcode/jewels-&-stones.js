
//https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    const distintMap = new Map();
    [...S].forEach(s=>{
        
       if(distintMap.has(s)){
           let sVal = distintMap.get(s)
           distintMap.set(s, sVal+1);
       } else {
           distintMap.set(s, 1);
       }
        
    });
    let out = 0;
    [...J].forEach(j=> {
        jVal = distintMap.get(j);
        if(jVal){
           out += jVal; 
        }
        
    });
    
    return out;
    
};
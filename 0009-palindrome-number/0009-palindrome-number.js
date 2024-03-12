/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = String(x).split("").reverse().join("");
    if(String(x)===reverse){
        return true;
    }
    else{
        return false;
    }
};

/** Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    var result = '';
    for(var i = 0; i < strs[0].length; i++) {
        if (strs.every(function (item) {
                return strs[0][i] === item[i];
            })) {
            result += strs[0][i];
        } else {
            break;
        }
    }
    return result;
};
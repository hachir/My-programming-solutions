/**Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Example 1:
Input: 121
Output: true
*/


var isPalindrome = function(x) {
  if (!isNaN(x)) {
      x = x.toString();
  }

   y = x.split("").reverse().join("");

   if (x === y) {
      return true;
   } else {
      return false;
   }
};
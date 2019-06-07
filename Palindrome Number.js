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
/**Given a sorted array nums, remove the duplicates in-place 
such that each element appear only once and return the new length.
Example:
Given nums = [1,1,2],
*/


var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        //Next number is identical to current one
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
};
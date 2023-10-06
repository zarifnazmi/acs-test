"use strict";
/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
exports.__esModule = true;
function twoSum(numbers, target) {
    // your code here
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[j] === target - numbers[i]) {
                return result = [i + 1, j + 1];
            }
        }
    }
    return result;
}
console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));

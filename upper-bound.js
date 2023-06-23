/* Finding lower bound in an array.
The upper bound is the smallest index, ind, where "arr[ind] > x". 
But if any such index is not found, the lower bound algorithm returns n i.e. size of 
the given array.
*/

/* Time Complexity -> O(n) | Space Complexity -> O(1) */
function upperBound(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) return i;
  }

  return arr.length;
}

const result = upperBound([3, 5, 8, 9, 15, 19], 9);
console.log(result);

/* lower bound using binary search: Time Complexity -> O(logn) | Space Complexity -> O(1) */

function upperBoundOptimized(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let result = arr.length;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] > num) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}

const resultOptimized = upperBoundOptimized([3, 5, 8, 9, 15, 19], 9);
console.log(resultOptimized);

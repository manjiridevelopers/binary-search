/* Time Complexity -> O(n) | Space Complexity -> O(1) */
function kthMissingNumber(arr, k) {
  for (let el of arr) {
    if (el <= k) k++;
  }

  return k;
}

const result = kthMissingNumber([1, 3, 4, 5, 7], 2);
console.log(result);

/* Binary search approach: Time Complexity -> O(logn) | Space Complexity -> O(1) */

function kthMissingNumberOptimized(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let mid, missingNums;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    missingNums = arr[mid] - (mid + 1);

    if (missingNums < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high + k + 1;
}

const resultOptimized = kthMissingNumber([1, 3, 4, 5, 7], 2);
console.log(resultOptimized);

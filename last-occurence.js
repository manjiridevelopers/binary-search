/* Brute force approach: Time Complexity -> O(n) | Space Complexity -> O(1) */

function lastOccurence(arr, num) {
  let res = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == num) {
      res = i;
      break;
    }
  }

  return res;
}

const result = lastOccurence([3, 1, 2, 2, 4, 3, 4, 5], 3);
console.log(result);

/* Optimzed way through binary search 
Time Complexity -> O(logn) | O(1)
*/

function lastOccurenceOptimized(arr, num) {
  let pos = -1;
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] == num) {
      pos = mid;
      start = mid + 1;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return pos;
}

const resultOptimized = lastOccurenceOptimized([3, 1, 2, 2, 4, 3, 4, 5], 3);
console.log(resultOptimized);

/* Brute force approach: Time Complexity -> O(n) | Space Complexity -> O(1) */

function singleElInSortedArr(arr) {
  let n = arr.length - 1;
  let singleEl;

  if (n == 0) return (singleEl = arr[0]);

  for (let i = 0; i <= n; i++) {
    if (i == 0 && arr[i] != arr[i + 1]) {
      singleEl = arr[i];
    } else if (i == n && arr[i] != arr[i - 1]) {
      singleEl = arr[i];
    } else if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
      singleEl = arr[i];
    }
  }

  return singleEl;
}

const result = singleElInSortedArr([1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65]);
console.log(result);

/* Optimized using binary search: O(logn) | O(1) 

arr:    [1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65]
indexes: 0  1  2  3  4  5  6  7   8    9  10
*/

function singleElInSortedArr(arr) {
  let low = 0;
  let high = arr.length - 1;

  if (arr[0] !== arr[1]) return arr[0];
  if (arr[high] !== arr[high - 1]) return arr[high - 1];

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    if (
      (mid % 2 == 0 && arr[mid + 1] == arr[mid]) ||
      (mid % 2 == 1 && arr[mid - 1] == arr[mid])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const resultOptimized = singleElInSortedArr([
  1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65,
]);
console.log(resultOptimized);

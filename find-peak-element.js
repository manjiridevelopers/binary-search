/* Brute force approach: Time Complexity -> O(n) | Space Complexity -> O(1) */

function findPeakEl(arr) {
  let peak = -Infinity;

  peak = Math.max(peak, arr[0], arr[1]);

  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peak = Math.max(peak, arr[i]);
    }
  }

  peak = Math.max(peak, arr[arr.length - 1], arr[arr.length - 2]);

  return peak;
}

const result = findPeakEl([3, 5, 4, 1, 0]);
console.log(result);

/* Optimized using binary search: Time Complexity -> O(n) | Space Complexity -> O(1) */

/* ALGORITHM: 
1. Every array will have a peak element. So, subarray will always have a peak element.
2. Three conditions in one check: 
        1. mid == 0 && arr[mid] >= arr[mid + 1]
        2. mid = n - 1 && arr[mid] >= arr[mid - 1]
        3. arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]
3. if arr[mid] <= arr[mid + 1] then select the subarray after mid
    else select the subarray before mid.
*/

function findPeakElOptimized(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (
      (mid == 0 || arr[mid] >= arr[mid - 1]) &&
      (mid == arr.length - 1 || arr[mid] >= arr[mid + 1])
    ) {
      return arr[mid];
    } else if (arr[mid] <= arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const resultOptimized = findPeakElOptimized([3, 5, 4, 1, 1]);
console.log(resultOptimized);

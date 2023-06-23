/* Optimized Solution: O(logn) | O(1) */

function rotatedSortedArrSearch(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] == num) return mid;
    else if (arr[low] <= arr[mid]) {
      if (arr[low] <= num && num <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= num && num <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

const result = rotatedSortedArrSearch([7, 8, 9, 1, 2, 3, 4, 5, 6], 1);
console.log(result);

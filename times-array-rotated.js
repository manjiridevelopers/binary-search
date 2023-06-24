/* Solution: Find out the index of the minimum element in the rotated arr 
   Time Complexity -> O(logn) | Space Complexity -> O(1)
*/

function timesArrayRotated(arr) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let min = Infinity;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[high]) {
      return low;
    }

    if (arr[low] <= arr[mid]) {
      min = Math.min(min, arr[low]);
      low = mid + 1;
    } else {
      min = Math.min(min, arr[mid]);
      high = mid - 1;
    }
  }

  return min;
}

const result = timesArrayRotated([5, 1, 2, 3, 4]);
console.log(result);

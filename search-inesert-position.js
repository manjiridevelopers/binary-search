/*
Time Complexity -> O(logn) | Space Complexity -> O(1) 
Solution: we need to find out the lower bound in order to find insert position 
*/

function searchInsertPosition(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let resPos = arr.length;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      resPos = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return resPos;
}

const result = searchInsertPosition([1, 2, 4, 7], 6);
console.log(result);

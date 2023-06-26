/* 
Using binary search: Time Complexity -> O(n * logn) | Space Complexity -> O(1) 
HINT: Largest sum of subarray is minimized
*/

function canSplit(arr, nums, max) {
  let total = 0;
  let countSubArr = 1;

  arr.forEach((el) => {
    if (total + el > max) {
      countSubArr++;
      total = el;
    } else {
      total += el;
    }
  });

  return countSubArr <= nums;
}

function splitArr(arr, n) {
  let low = Math.max(...arr);
  let high = arr.reduce((prev, curr) => prev + curr, 0);
  let res;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canSplit(arr, n, mid)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
}

const result = splitArr([1, 2, 3, 4, 5], 2);
console.log(result);

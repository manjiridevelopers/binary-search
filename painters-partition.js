/* Time Complexity -> o(nlogn) | Space Complexity -> O(1) */

function canAllocated(arr, max, k) {
  let count = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > max) {
      count++;
      sum = arr[i];
    } else {
      sum += arr[i];
    }
  }

  return count <= k;
}

function paintersPartition(arr, k) {
  let totalBoards = arr.reduce((prev, curr) => prev + curr, 0);
  let low = Math.min(...arr);
  let high = totalBoards;
  let mid, res;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canAllocated(arr, mid, k)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
}

const result = paintersPartition([5, 5, 5, 5], 2);
console.log(result);

/* Time Complexity -> O(nlogn + logn + n) | Space Complexity -> O(1)*/

function canFit(arr, dist, nums) {
  let count = 1;
  let last = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= dist) {
      count++;
      last = arr[i];
    }
  }

  return count >= nums;
}

function maxDistance(arr, nums) {
  arr.sort((a, b) => a - b);
  let low = 1;
  let high = arr[arr.length - 1] - arr[0];
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canFit(arr, mid, nums)) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return res;
}

const result = maxDistance([1, 2, 8, 4, 9], 3);
console.log(result);

/* Koko eating bananas: https://practice.geeksforgeeks.org/problems/koko-eating-bananas/1
 Time Complexity -> (nlogn) | Space Complexity -> O(1)*/

function canEatAll(arr, hours, mid) {
  let totalHours = 0;

  for (let banana of arr) {
    totalHours += Math.ceil(banana / mid);
  }

  return totalHours <= hours;
}

function minimumNo(arr, hours) {
  let low = 1;
  let high = Math.max(...arr);
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canEatAll(arr, hours, mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

const result = minimumNo([3, 6, 7, 11], 8);
console.log(result);

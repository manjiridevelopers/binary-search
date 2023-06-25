/*
	Problem: Capacity To Ship Packages Within D Days
	HINT: We need to find out the maximum capacity of the ship.
	Link: https://practice.geeksforgeeks.org/problems/capacity-to-ship-packages-within-d-days/1
	Time Complexity -> (nlogn) | Space Complexity -> O(1)
*/

function canShip(arr, leastWeight, days) {
  let totalWeight = 0;
  let totalDays = 1; // important point

  arr.forEach((weight) => {
    if (weight + totalWeight <= leastWeight) {
      totalWeight += weight;
    } else {
      totalWeight = weight;
      totalDays++;
    }
  });

  return totalDays <= days;
}

function shipPackages(arr, d) {
  let low = Math.max(...arr);
  let high = arr.reduce((prev, el) => prev + el, 0);
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canShip(arr, mid, d)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

const result = shipPackages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
console.log(result);

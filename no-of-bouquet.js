/* 
	Problem:  Minimum days to make M bouquets
  Link: https://practice.geeksforgeeks.org/problems/minimum-days-to-make-m-bouquets/1 
  Time Complexity -> (nlogn) | Space Complexity -> O(1)
*/

function canMakeBouquet(arr, mid, b, f) {
  let totalBouquet = 0;
  let count = 0;

  arr.forEach((days) => {
    if (days <= mid) {
      count++;
    } else {
      totalBouquet += Math.floor(count / f);
      count = 0;
    }
  });
  totalBouquet += Math.floor(count / f);
  return totalBouquet >= b;
}

function noOfBouquet(arr, b, f) {
  let low = Math.min(...arr);
  let high = Math.max(...arr);
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canMakeBouquet(arr, mid, b, f)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

const result = noOfBouquet([5, 5, 5, 5, 10, 5, 5], 2, 3);
console.log(result);

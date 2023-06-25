/* 
 	Problem: Smallest Divisor
	Link: https://practice.geeksforgeeks.org/problems/smallest-divisor/1
	Time Complexity -> (nlogn) | Space Complexity -> O(1)
*/

function divSumCalc(arr, k) {
  let total = 0;

  arr.forEach((el) => {
    total += Math.ceil(el / k);
  });

  return total;
}

function smallestDivisor(arr, k) {
  let low = 1;
  let high = k;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (divSumCalc(arr, mid) <= k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

const result = smallestDivisor([1, 2, 5, 9], 6);
console.log(result);

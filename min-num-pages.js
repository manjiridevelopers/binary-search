/*
Problem: https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1
Optimized soluion through binary search: Time Complexity -> O(n*logn) | Space Complexity -> O(1) 
*/

function canAllocated(arr, maxPages, n) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxPages) {
      return false;
    }

    if (sum + arr[i] > maxPages) {
      count++;
      sum = arr[i];
    } else {
      sum += arr[i];
    }
  }

  count++;

  return count <= n;
}

function minimumNumPages(arr, n) {
  let totalPages = arr.reduce((prev, curr) => prev + curr, 0);
  let low = Math.min(...arr);
  let high = totalPages;
  let mid, res;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canAllocated(arr, mid, n)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
}

const result = minimumNumPages([12, 34, 67, 90], 2);
console.log(result);

/* 
Search Element in Rotated Sorted Array
Problem Statement: Given an integer array arr of size N, 
sorted in ascending order (may contain duplicate values) and a target value k. 
Now the array is rotated at some pivot point unknown to you. 
Return True if k is present and otherwise, return False.

Time Complexity -> O(logn) | Space Complexity -> O(1)
*/

function searchInRotatedArray(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] == num) return true;

    /* important case to handle */
    if (arr[mid] == arr[low] && arr[mid] == arr[high]) {
      low++;
      high--;
      continue;
    }

    if (arr[low] <= arr[mid]) {
      if (num >= arr[low] && num <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (num >= arr[mid] && num <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
}

const result = searchInRotatedArray([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 3);
console.log(result);

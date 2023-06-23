/* Iteartive Method:  Time Complexoty -> O(logn) | Space Complexity -> O(1)*/

function binarySearchIterative(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

const resultIterative = binarySearchIterative([2, 3, 7, 10, 13, 14, 17], 7);
console.log(resultIterative);

/* Recursive Method: Time Complexity -> O(logn) | Space Complexity -> O(logn) */
function binarySearchRecursive(arr, start, end, mid, target) {
  if (start >= end) return -1;

  if (arr[mid] == target) return mid;
  else if (arr[mid] < target) {
    start = mid + 1;
    binarySearchRecursive(arr, start, end, target);
  } else if (arr[mid] > target) {
    end = mid - 1;
    binarySearchRecursive(arr, start, end, target);
  } else return -1;
}

function binarySearchRecursiveMain(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + end / 2);

  const result = binarySearchRecursive(arr, start, end, mid, target);
  return result;
}

const resultRecursive = binarySearchRecursiveMain([2, 3, 7, 10, 13, 14, 17], 7);
console.log(resultRecursive);

/* Overflow case in binary search: Overflow can occur in the binary search algorithm 
when dealing with large input arrays or extremely large target values. This can lead
 to unexpected behavior or errors in the code. To address the overflow issue, 
 you can modify the code to handle large values more effectively. One approach 
 is to use a different formula to calculate the midpoint that avoids potential 
 overflow.
 
  let mid = start + Math.floor((end - start) / 2);
  
  In this updated code, the midpoint is calculated using the formula 

  start + Math.floor((end - start) / 2). 

  This formula avoids potential overflow by subtracting start from end before dividing
   by 2. This helps ensure that the code handles large values correctly and reduces 
   the risk of overflow.
   */

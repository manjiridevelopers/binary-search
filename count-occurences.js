/* Linear Search Way */
function countOccurences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) count++;
  }

  return count;
}

const result = countOccurences([2, 4, 6, 8, 8, 8, 11, 13], 8);
console.log(result);

/* Binary Search Way */

function countOccurencesOptimized(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let count = 0;

  while (start <= end) {
    mid = Math.min((start + end) / 2);
    if (arr[mid] == num) {
      count++;
      start = mid + 1;
    } else if (arr[mid] >= num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return count;
}

const resultOptimized = countOccurencesOptimized([2, 4, 6, 8, 8, 8, 11, 13], 8);
console.log(result);

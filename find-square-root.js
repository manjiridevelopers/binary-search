/* Square Root using Binary Search: Time Complexity -> O(logn) | Space Complexity -> O(1) */

function squareRoot(num) {
  let low = 0;
  let high = num - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const midSquared = mid * mid;

    if (midSquared == num) {
      return mid;
    }

    if (midSquared < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const result = squareRoot(81);
console.log(result);

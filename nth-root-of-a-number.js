/* nth Root using Binary Search: Time Complexity -> O(logn) | Space Complexity -> O(1) */

function nthRoot(num, n) {
  let start;
  let end;
  let mid;
  let midPower;

  if (num < 1) {
    start = num;
    end = 1;
  } else {
    start = 1;
    end = n;
  }

  let tolerance = 0.000001;

  while (end - start > tolerance) {
    mid = (start + end) / 2;
    midPower = Math.pow(mid, n);

    if (midPower < num) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return end;
}

const result = nthRoot(256, 4);
console.log(result);

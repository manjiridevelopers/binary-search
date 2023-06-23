/* Hint: find lower bound */

function ceilFinder(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let ceilIdx = -1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] >= num) {
      ceilIdx = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ceilIdx;
}

function floorFinder(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let floorIdx = -1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] <= num) {
      floorIdx = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return floorIdx;
}

function floorCeilFinder(arr, num) {
  let floorIdx = floorFinder(arr, num);
  let ceilIdx = ceilFinder(arr, num);

  return [arr[floorIdx], arr[ceilIdx]];
}

const result = floorCeilFinder([3, 4, 4, 7, 8, 10], 5);
console.log(result);

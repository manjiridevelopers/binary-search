function minimumInRotatedSortedArr(arr) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let min = Infinity;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[high]) {
      return (min = Math.min(arr[low], min));
    }

    if (arr[low] <= arr[mid]) {
      min = Math.min(arr[low], min);
      low = mid + 1;
    } else {
      min = Math.min(arr[mid], min);
      high = high - 1;
    }
  }

  return min;
}

const result = minimumInRotatedSortedArr([7, 8, 1, 2, 3, 3, 3, 4, 5, 6]);
console.log(result);

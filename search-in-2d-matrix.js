/* Time Complexity: O(n + m) | Space Complexity: O(1)*/

function searchIn2DMatrix(matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] == target) return true;
    if (matrix[i][j] > target) j--;
    else i++;
  }

  return false;
}

const result = searchIn2DMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  10
);
console.log(result);

/* Optimized Binary Search Way: O(logn) | O(1) */

function searchIn2DMatrixOptimized(matrix, target) {
  let low = 0;
  let high = matrix[0].length * matrix.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + mid) / 2);
    let i = mid / matrix[0].length;
    let j = mid % matrix[0].length;
    if (matrix[i][j] == target) return true;

    if (matrix[i][j] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

const resultOptimized = searchIn2DMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  10
);
console.log(resultOptimized);

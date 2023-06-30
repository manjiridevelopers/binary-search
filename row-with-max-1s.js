/* Time Complexity: O(logn) | Space Complexity -> O(1) */

function rowWithMax1s(matrix) {
  let m = matrix.length - 1;
  let i = 0;
  let j = 0;
  let maxRow = { row: -1, count: 0 };
  let count = 0;

  while (i <= m && j <= m) {
    if (matrix[i][j] == 1) {
      count++;
      if (count > maxRow.count) {
        maxRow.row = i;
        maxRow.count = count;
      }
    }
    if (i == m && j == m) break;
    if (j == m) {
      j = 0;
      i++;
      count = 0;
    } else {
      j++;
    }
  }

  return maxRow;
}

const result = rowWithMax1s([
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
]);
console.log(result);

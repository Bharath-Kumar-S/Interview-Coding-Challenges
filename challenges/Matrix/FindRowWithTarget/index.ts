export const findRowWithTarget = (
  matrix: number[][],
  target: number
): number => {
  let row: number = 0;
  let col: number = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return row;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return -1;
};

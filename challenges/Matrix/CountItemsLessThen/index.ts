export const countLessThan = (matrix: number[][], target: number): number => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let count = 0;
  let row = 0;
  let col = cols - 1; // Start from the top-right corner

  while (row < rows && col >= 0) {
    if (matrix[row][col] < target) {
      // If the current element is less than the target,
      // all elements in this row up to this column are also less.
      count += col + 1;
      row++; // Move down to the next row
    } else {
      // If the current element is greater than or equal to the target,
      // move left to the previous column
      col--;
    }
  }

  return count;
};

// Object(m + N)

export function isToeplitz(matrix: number[][]): boolean {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
}

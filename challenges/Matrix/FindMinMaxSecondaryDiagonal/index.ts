export const findMinMaxSecondaryDiagonal = (
  grid: number[][]
): [number | null, number | null] => {
  const rows = grid.length;
  if (rows === 0) return [null, null]; // Handle empty grid

  const columns = grid[0].length;
  if (rows !== columns) throw new Error("Grid must be square"); // Handle non-square grid

  let min = grid[0][columns - 1];
  let max = grid[0][columns - 1];

  // Traverse the secondary diagonal
  for (let i = 0, j = columns - 1; i < rows; i++, j--) {
    min = Math.min(min, grid[i][j]);
    max = Math.max(max, grid[i][j]);
  }

  return [min, max];
};

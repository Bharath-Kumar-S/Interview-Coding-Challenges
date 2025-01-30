export const tribonacci = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  // Check if the result is already in the memo
  if (n in memo) {
    return memo[n];
  }
  // Base cases
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }
  // Recursive case with memoization
  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
};

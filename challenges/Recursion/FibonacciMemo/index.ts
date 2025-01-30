export function fibonacci(n: number): number {
  // Helper function for memoized recursion
  const memo: Record<number, number> = {};

  const fib = (n: number): number => {
    // Base cases: return 0 or 1 for the first two Fibonacci numbers
    if (n === 0) return 0;
    if (n === 1) return 1;

    // If the result is already computed, return it from the memo
    if (memo[n] !== undefined) {
      return memo[n];
    }

    // Compute the Fibonacci number and store it in the memo
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };

  return fib(n);
}

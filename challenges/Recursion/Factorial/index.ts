export const factorial = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

export const factorialIterative = (n: number): number => {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  while (n > 1) {
    result = result * n;
    n--;
  }
  return result;
};

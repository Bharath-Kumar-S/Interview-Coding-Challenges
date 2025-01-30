export function getSum(n: number): number {
  if (n === 1) return 1;
  else return n + getSum(n - 1);
}

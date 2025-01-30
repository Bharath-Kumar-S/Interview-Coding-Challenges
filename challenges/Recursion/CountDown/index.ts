export function countDown(n: number): number[] {
  if (n === 1) {
    return [1];
  } else {
    return [n, ...countDown(n - 1)];
  }
}

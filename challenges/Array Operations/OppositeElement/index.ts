export const oppositeElement = (arr: number[]): string[] => {
  let result: string[] = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    result.push(arr[i] + " " + arr[n - i - 1]);
  }
  return result;
};

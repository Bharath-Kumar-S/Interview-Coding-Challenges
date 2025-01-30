export const reverseGroups = (numbers: number[], k: number): number[] => {
  const reverseArray = (arr: number[]): number[] => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  };

  let result: number[] = [];
  for (let i = 0; i < numbers.length; i += k) {
    let group = reverseArray(numbers.slice(i, i + k));
    result.push(...group);
  }
  return result;
};

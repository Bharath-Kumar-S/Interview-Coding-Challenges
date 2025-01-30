export const countOccurrences2 = (arr: number[], num: number): number => {
  return arr.reduce((acc, val) => (val === num ? acc + 1 : acc), 0);
};

export const countOccurrences = (arr: number[], num: number): number => {
  let count: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
};

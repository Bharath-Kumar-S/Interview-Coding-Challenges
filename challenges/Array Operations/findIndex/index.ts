export const findIndex = (arr: number[], val: number): number => {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

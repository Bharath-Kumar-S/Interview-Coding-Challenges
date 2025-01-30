export const countUniqueElements = (arr: number[]): number => {
  const frequency: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }

  //   return Object.keys(frequency).length;
  let uniqueCount = 0;
  for (const count of Object.values(frequency)) {
    if (count === 1) {
      uniqueCount++;
    }
  }

  return uniqueCount;
};

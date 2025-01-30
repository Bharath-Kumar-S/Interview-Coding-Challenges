export const rearrangeArray = (nums: number[]): number[] => {
  const n = nums.length;

  // Determine the boundaries of the quarters
  const quarterLength = Math.floor(n / 4);
  const middleStart = quarterLength; // Start of the second quarter
  const middleEnd = n - quarterLength; // End of the third quarter

  // Extract the middle quarters (second and third)
  const middleHalf = nums.slice(middleStart, middleEnd);

  // Extract the left and right quarters
  const leftQuarter = nums.slice(0, middleStart);
  const rightQuarter = nums.slice(middleEnd);

  // Rearrange the array in place
  return nums.splice(
    0,
    nums.length,
    ...middleHalf,
    ...leftQuarter,
    ...rightQuarter
  );
};

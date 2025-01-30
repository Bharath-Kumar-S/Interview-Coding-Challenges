export const secondLargest = (nums: number[]): number | null => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
};

export const shuffleArray = (nums: number[], k: number): number[] => {
  let result = [];
  let toEnd = [];

  for (let i = 0; i < nums.length; i++) {
    if ((i + 1) % k === 0) {
      toEnd.push(nums[i]);
    } else {
      result.push(nums[i]);
    }
  }

  return result.concat(toEnd);
};

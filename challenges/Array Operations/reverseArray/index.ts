export const reverseArray = (arr: number[]): number[] => {
  let revArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }

  return revArr;
};

// export function solution(nums: number[]): number[] {
//   let start = 0;
//   let end = nums.length - 1;

//   while(start < end){
//       [nums[start], nums[end]] = [nums[end], nums[start]]
//       start++;
//       end--;
//   }

//   return nums;
// }

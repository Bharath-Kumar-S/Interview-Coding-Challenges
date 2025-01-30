function rotateArrayAntiClockwise(nums: number[], k: number): number[] {
  const n = nums.length;

  // Normalize k to handle cases where k > n
  k = k % n;

  // Helper function to reverse a portion of the array
  function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Step 2: Reverse the remaining elements
  reverse(nums, k, n - 1);

  // Step 3: Reverse the entire array
  reverse(nums, 0, n - 1);

  return nums;
}

// Example
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArrayAntiClockwise(nums, k)); // Output: [4, 5, 6, 7, 1, 2, 3]

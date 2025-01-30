function rotateArrayClockwise(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; // Ensure k is within bounds

  // Step 1: Reverse the entire array
  reverse(nums, 0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(nums, k, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
    start++;
    end--;
  }
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotateArrayClockwise(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]

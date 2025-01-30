# Second Largest Number Challenge

## Description

You are given an array of integers. Your task is to write a TypeScript function to find the second-largest number among these integers. If the array has fewer than two unique numbers, return `null`.

You are not allowed to use any built-in TypeScript functions or methods such as `Math.max()`, `sort()`, or `reduce()`. Instead, you should implement the task using basic array operations.

## Requirements

- Implement the function using TypeScript.
- Do not use any built-in TypeScript functions or methods for finding the maximum value, sorting, or reducing the array.
- The function should return `null` if the array has fewer than two unique numbers.

## Example

```typescript
function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) return null;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Example usage:
console.log(findSecondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Output: 6
console.log(findSecondLargest([1, 2])); // Output: 1
console.log(findSecondLargest([2, 2, 2])); // Output: null
console.log(findSecondLargest([1])); // Output: null
```

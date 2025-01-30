# Array Operations: Find Index

## Problem Statement

You are given an array of `n` integers. Your task is to find the zero-based index of the first occurrence of a specific value in the array. If the provided value isn't found in the array at all, return `-1` instead.

In this task, you must implement the solution without using any built-in functions or methods. Specifically, the use of the TypeScript `indexOf()` method of an array is not allowed in your solution.

## Example

```typescript
let arr = [1, 2, 3, 4, 5];
let value = 3;
console.log(findIndex(arr, value)); // Output: 2

value = 6;
console.log(findIndex(arr, value)); // Output: -1
```

## Constraints

- The array length `n` will be in the range `[0, 10^5]`.
- The array elements will be integers in the range `[-10^9, 10^9]`.

## Function Signature

```typescript
function findIndex(arr: number[], value: number): number {
  // Your code here
}
```

## Approach

1. Iterate through the array from the beginning to the end.
2. Compare each element with the given value.
3. If a match is found, return the current index.
4. If no match is found after the loop ends, return `-1`.

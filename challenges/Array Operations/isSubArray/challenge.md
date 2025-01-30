# Array Operations: isSubArray

## Problem Statement

You are provided with two arrays of integers, `arrayA` and `arrayB`. Your task is to determine if `arrayB` is a contiguous subarray of `arrayA`. You need to return `true` if `arrayB` is a contiguous subarray of `arrayA`, and `false` otherwise.

A subarray is defined as a subset of consecutive elements within an array. For instance, `[2, 3]` is a subarray of `[1, 2, 3, 4]` but not a subarray of `[1, 3, 2, 4]`.

Note that you are not allowed to use any built-in TypeScript functions for this task except for accessing array length using `length`. All other operations should be executed with basic TypeScript programming constructs.

## Example

```typescript
const arrayA = [1, 2, 3, 4];
const arrayB = [2, 3];

console.log(isSubArray(arrayA, arrayB)); // Output: true

const arrayC = [1, 3, 2, 4];
const arrayD = [2, 3];

console.log(isSubArray(arrayC, arrayD)); // Output: false
```

## Constraints

- The elements of `arrayA` and `arrayB` are integers.
- The length of `arrayA` and `arrayB` is at least 1.

## Function Signature

```typescript
function isSubArray(arrayA: number[], arrayB: number[]): boolean {
  // Your code here
}
```

## Approach

1. Iterate through `arrayA` to find the starting point of `arrayB`.
2. Check if the subsequent elements in `arrayA` match all elements in `arrayB`.
3. Return `true` if a match is found, otherwise return `false`.

## Testing

Make sure to test your function with various cases, including edge cases such as:

- `arrayB` being empty.
- `arrayB` being the same as `arrayA`.
- `arrayB` being longer than `arrayA`.

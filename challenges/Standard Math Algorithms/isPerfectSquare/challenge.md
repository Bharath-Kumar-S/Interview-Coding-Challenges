# Perfect Square Challenge

## Description

You are given an integer number `n`. The task is to determine if this number is a perfect square or not. A perfect square is a number that can be expressed as the product of an integer with itself. For example, 1 = 1 _ 1, 4 = 2 _ 2, 9 = 3 _ 3, and 16 = 4 _ 4 are perfect squares, but 2, 3, 5, and 6 are not.

## Task

Implement a function `isPerfectSquare(n: number): boolean` that returns `true` if the given number `n` is a perfect square and `false` otherwise.

## Example

```typescript
console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(9)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(2)); // false
console.log(isPerfectSquare(3)); // false
console.log(isPerfectSquare(5)); // false
console.log(isPerfectSquare(6)); // false
```

## Constraints

- The input number `n` will be a non-negative integer.
- The function should handle large values of `n` efficiently.

# Co-Prime Checker

## Description

You are provided with two integers, `a` and `b`. Your task is to write a TypeScript function that checks whether both `a` and `b` are co-prime or not. Two numbers are said to be co-prime or mutually prime if the only positive integer that divides both of them is 1. The expected complexity is `O(max(a, b))`.

## Example

```typescript
console.log(areCoprime(15, 28)); // Output: true
console.log(areCoprime(12, 18)); // Output: false
```

In the first example, the only positive integer that divides both 15 and 28 is 1; hence, they are co-prime. However, in the second example, 12 and 18 are divisible by 2 and 3; thus, they are not co-prime.

## Function Signature

```typescript
function areCoprime(a: number, b: number): boolean {
  // Your implementation here
}
```

## Constraints

- The function should handle positive integers.
- The expected time complexity is `O(max(a, b))`.

## Usage

To use the function, simply call it with two integers as arguments:

```typescript
const result = areCoprime(15, 28);
console.log(result); // Output: true
```

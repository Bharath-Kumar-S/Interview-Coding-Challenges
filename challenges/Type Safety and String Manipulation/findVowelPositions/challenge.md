# Challenge: Find Vowel Positions

## Problem Statement

Write a function that takes a string `s`, iterates through it, and collects all 0-based positions of vowels in it to an array.

Note that you should not use any TypeScript built-in methods to solve this task.

## Example

```javascript
console.log(findVowelPositions("Hello WORLD")); // should output [1, 4, 7]
```

Here, 'e' is a vowel, and its position in the string "Hello" is 1. 'o' is also a vowel, and its position is 4. The last vowel is 'O' at position 7. Vowels are defined as any of the following characters: ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].

## Function Signature

```typescript
function findVowelPositions(s: string): number[] {
  // Your code here
}
```

## Constraints

- Do not use any TypeScript built-in methods to solve this task.
- The function should be case-insensitive when identifying vowels.
- The input string `s` can contain any printable ASCII characters.

## Solution

To solve this problem, you need to:

1. Iterate through each character of the string.
2. Check if the character is a vowel.
3. If it is, record its position in an array.
4. Return the array of positions.

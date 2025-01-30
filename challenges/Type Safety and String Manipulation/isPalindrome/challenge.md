# Palindrome Checker

## Description

You are given a string, and your task is to check whether the provided string is a palindrome, without using any built-in string methods. A string is a palindrome if it reads the same forward and backward, ignoring the casing of letters ('A' and 'a' are considered the same) and ignoring non-letter characters.

## Task

Write a function that returns a boolean value: `true` if the string is a palindrome and `false` if it is not.

## Helper Function

The `isAlphaNumeric` function is a given helper function that checks whether a character is alphanumeric, meaning it is either a letter (A-Z, a-z) or a digit (0-9).

## Constraints

- Do not use TypeScript built-in functions like `reverse()`, or similar in this task.

## Example

```typescript
function isPalindrome(s: string): boolean {
  // Your implementation here
}
```

## Notes

- Consider only alphanumeric characters and ignore cases.
- You may assume the given string is non-empty and contains only printable ASCII characters.

## Usage

To use the `isPalindrome` function, simply call it with a string argument:

```typescript
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race a car")); // false
```

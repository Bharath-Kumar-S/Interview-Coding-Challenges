# Change Cases

## Description

Given a string `inputString`, your task is to write a function that transforms all the lowercase letters to uppercase and all the uppercase letters to lowercase. If the character is not a letter, do not transform it.

The transformation should be done without using any built-in TypeScript methods like `toLowerCase()`, `toUpperCase()`, or similar in your code.

## Example

For the input string `"HelLo WoRld 123"`, the output should be `"hELlO wOrLD 123"`.

## Requirements

- Do not use any built-in TypeScript methods like `toLowerCase()`, `toUpperCase()`, or similar.
- Only letters should be transformed; other characters should remain unchanged.

## Usage

To use the function, call it with a string argument:

```typescript
const result = changeCases("HelLo WoRld 123");
console.log(result); // Output: "hELlO wOrLD 123"
```

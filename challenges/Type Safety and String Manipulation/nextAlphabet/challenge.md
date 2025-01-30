# Next Alphabet Challenge

## Description

Given a string, you need to return a new string where every letter is shifted to its right by one place in alphabetical order. The last letters `z` and `Z` should be replaced with the first ones: `a` and `A`, respectively. If the character isn't a letter, it should stay the same.

It is not allowed to use string built-in methods here such as `charCodeAt()` and `fromCharCode()`.

## Example

For example, given the string `"abc123XYz!"`, the function should return `"bcd123YZa!"`.

## Constraints

- Do not use string built-in methods such as `charCodeAt()` and `fromCharCode()`.

## Usage

To use this function, simply call it with a string argument:

```javascript
const result = nextAlphabet("abc123XYz!");
console.log(result); // Output: "bcd123YZa!"
```

## Implementation

Implement the function `nextAlphabet` to achieve the desired functionality.

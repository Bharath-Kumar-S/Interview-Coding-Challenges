# Replace Character Challenge

## Description

Given a string `inputString`, return a new string in which all occurrences of character `char1` in the original string are replaced by `char2`. The transformation should be done without using any built-in TypeScript methods like `replace()` or similar in your code.

## Example

```typescript
inputString = "hello world";
char1 = "o";
char2 = "a";

output = "hella warld";
```

## Requirements

- Do not use any built-in TypeScript methods like `replace()` or similar.
- The function should handle edge cases such as empty strings and strings without the character to be replaced.

## Function Signature

```typescript
function replaceCharacter(
  inputString: string,
  char1: string,
  char2: string
): string {
  // Your implementation here
}
```

## Testing

You should write tests to verify your implementation. Consider the following cases:

1. Basic replacement
2. No occurrences of `char1`
3. Empty `inputString`
4. `char1` and `char2` are the same
5. `inputString` contains special characters

## Example Test Cases

```typescript
console.assert(
  replaceCharacter("hello world", "o", "a") === "hella warld",
  "Test Case 1 Failed"
);
console.assert(
  replaceCharacter("hello world", "x", "a") === "hello world",
  "Test Case 2 Failed"
);
console.assert(replaceCharacter("", "o", "a") === "", "Test Case 3 Failed");
console.assert(
  replaceCharacter("hello world", "o", "o") === "hello world",
  "Test Case 4 Failed"
);
console.assert(
  replaceCharacter("hello! world?", "!", "?") === "hello? world?",
  "Test Case 5 Failed"
);
```

## Notes

- Ensure your code is clean and well-documented.
- Optimize for readability and maintainability.

Happy coding!

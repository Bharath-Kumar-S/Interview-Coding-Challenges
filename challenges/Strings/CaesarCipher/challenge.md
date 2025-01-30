# Caesar Cipher Challenge

## Description

This challenge involves implementing a simple text encryption technique known as the Caesar Cipher. The Caesar Cipher for a given `shift` value cyclically shifts every letter of the word by the specified number of positions.

For example, with a `shift = 3`:

- `a` -> `d`
- `b` -> `e`
- `c` -> `f`
- ...
- `x` -> `a`
- `y` -> `b`
- `z` -> `c`

## Task

Implement the encryption logic by shifting each alphabet character in the input string by the specified `shift` value.

## Example

Given the input string `hello` and `shift = 3`, the output should be `khoor`.

## Requirements

- Only alphabet characters should be shifted.
- Non-alphabet characters should remain unchanged.
- The function should handle both uppercase and lowercase letters.

## Usage

To use the Caesar Cipher encryption, call the function with the input string and the desired shift value.

```python
def caesar_cipher(text, shift):
    # Your implementation here
    pass

# Example usage
encrypted_text = caesar_cipher("hello", 3)
print(encrypted_text)  # Output: khoor
```

## Notes

- Ensure that the function handles edge cases, such as wrapping around the end of the alphabet.
- Consider the performance of your implementation for longer input strings.

Good luck and happy coding!

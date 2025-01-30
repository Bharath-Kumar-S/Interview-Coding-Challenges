# Shift Array Elements

This function shifts the elements of an array by a specified number of positions.

## Function Signature

```typescript
export const shiftArrayElements = (
  arr: number[],
  shift: number
): number[] => {};
```

## Parameters

- `arr`: An array of numbers to be shifted.
- `shift`: The number of positions to shift the elements. A positive value shifts the elements to the right, and a negative value shifts the elements to the left.

## Returns

- A new array with the elements shifted by the specified number of positions.

## Example

```typescript
const arr = [1, 2, 3, 4, 5];
const shift = 2;
const result = shiftArrayElements(arr, shift);
console.log(result); // Output: [4, 5, 1, 2, 3]
```

In this example, the array `[1, 2, 3, 4, 5]` is shifted to the right by 2 positions, resulting in `[4, 5, 1, 2, 3]`.

## Explanation

1. **Normalization of Shift**: The shift value is normalized to handle cases where the absolute value of the shift is greater than the length of the array.
2. **Shifting Elements**: A new array `nrr` is created, and elements from the original array `arr` are placed into their new positions based on the shift value.

This approach ensures that the elements are shifted efficiently without modifying the original array.

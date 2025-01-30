import { reverseArray } from ".";

describe("reverseArray", () => {
  const testCases = [
    { arr: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
    { arr: [1, 1, 1, 1, 1], expected: [1, 1, 1, 1, 1] },
    { arr: [1, 2, 1, 2, 1], expected: [1, 2, 1, 2, 1] },
    {
      arr: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      expected: [5, 4, 3, 2, 1, 5, 4, 3, 2, 1],
    },
    {
      arr: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      expected: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
    },
  ];

  testCases.forEach(({ arr, expected }) => {
    it(`should return ${JSON.stringify(expected)} for array ${JSON.stringify(
      arr
    )}`, () => {
      expect(reverseArray(arr)).toEqual(expected);
    });
  });
});

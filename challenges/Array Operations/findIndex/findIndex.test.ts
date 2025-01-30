import { findIndex } from ".";

describe("findIndex", () => {
  const testCases = [
    { arr: [1, 2, 3, 4, 5], val: 3, expected: 2 },
    { arr: [1, 2, 3, 4, 5], val: 5, expected: 4 },
    { arr: [1, 2, 3, 4, 5], val: 1, expected: 0 },
    { arr: [1, 2, 3, 4, 5], val: 6, expected: -1 },
    { arr: [1, 2, 3, 4, 5], val: 0, expected: -1 },
  ];

  testCases.forEach(({ arr, val, expected }) => {
    it(`should return ${expected} for array ${JSON.stringify(
      arr
    )} and value ${val}`, () => {
      expect(findIndex(arr, val)).toBe(expected);
    });
  });
});

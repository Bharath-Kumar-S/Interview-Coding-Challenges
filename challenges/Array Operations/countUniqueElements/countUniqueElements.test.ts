import { countUniqueElements } from ".";

describe("countUniqueElements", () => {
  const testCases = [
    { arr: [1, 2, 3, 4, 5], expected: 5 },
    { arr: [1, 1, 1, 1, 1], expected: 0 },
    { arr: [1, 2, 1, 2, 1], expected: 0 },
    { arr: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], expected: 0 },
    { arr: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], expected: 0 },
  ];

  testCases.forEach(({ arr, expected }) => {
    it(`should return ${expected} for array ${JSON.stringify(arr)}`, () => {
      expect(countUniqueElements(arr)).toBe(expected);
    });
  });
});

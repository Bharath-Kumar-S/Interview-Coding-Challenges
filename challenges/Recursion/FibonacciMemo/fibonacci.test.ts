import { fibonacci } from ".";

describe("fibonacci", () => {
  const testCases = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
    [9, 34],
    [10, 55],
  ];

  testCases.forEach(([n, expected]) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(fibonacci(n)).toBe(expected);
    });
  });
});

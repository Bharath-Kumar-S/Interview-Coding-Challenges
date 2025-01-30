import { getSum } from ".";

describe("getSum", () => {
  const testCases = [
    [1, 1],
    [2, 3],
    [3, 6],
    [4, 10],
    [5, 15],
    [6, 21],
    [7, 28],
    [8, 36],
    [9, 45],
    [10, 55],
  ];

  testCases.forEach(([n, expected]) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(getSum(n)).toBe(expected);
    });
  });
});

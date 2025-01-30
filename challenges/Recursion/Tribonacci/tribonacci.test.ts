import { tribonacci } from ".";

describe("Tribonacci", () => {
  const testCases = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 4],
    [5, 7],
    [6, 13],
    [7, 24],
    [8, 44],
    [9, 81],
    [10, 149],
  ];

  testCases.forEach(([n, expected]) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(tribonacci(n)).toBe(expected);
    });
  });
});

import { countDown } from ".";

describe("countDown", () => {
  const testCases = [
    { n: 1, expected: [1] },
    { n: 2, expected: [2, 1] },
    { n: 3, expected: [3, 2, 1] },
    { n: 4, expected: [4, 3, 2, 1] },
    { n: 5, expected: [5, 4, 3, 2, 1] },
    { n: 6, expected: [6, 5, 4, 3, 2, 1] },
    { n: 7, expected: [7, 6, 5, 4, 3, 2, 1] },
    { n: 8, expected: [8, 7, 6, 5, 4, 3, 2, 1] },
    { n: 9, expected: [9, 8, 7, 6, 5, 4, 3, 2, 1] },
    { n: 10, expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  ];

  testCases.forEach(({ n, expected }) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(countDown(n)).toEqual(expected);
    });
  });
});

import { oppositeElement } from ".";

describe("Opposite Element", () => {
  const testCases = [
    { expected: ["1 5", "2 4", "3 3", "4 2", "5 1"], arr: [1, 2, 3, 4, 5] },
    { expected: ["1 3", "2 2", "3 1"], arr: [1, 2, 3] },
    { expected: ["1 2", "2 1"], arr: [1, 2] },
    { expected: ["1 1"], arr: [1] },
    { expected: [], arr: [] },
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for ${testCase.arr}`, () => {
      expect(oppositeElement(testCase.arr)).toStrictEqual(testCase.expected);
    });
  });
});

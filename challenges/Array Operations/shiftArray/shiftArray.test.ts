import { shiftArrayElements } from ".";

describe("shiftArrayElements", () => {
  const testCases = [
    { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
    { input: [[1, 2, 3, 4, 5], -1], expected: [2, 3, 4, 5, 1] },
    {
      input: [[8, 20, -3, 23, 32, -4, 7], 3],
      expected: [32, -4, 7, 8, 20, -3, 23],
    },
    { input: [[-3], 100], expected: [-3] },
    {
      input: [[3, 2, 12, 123, 53, 23, 123, -432], 5],
      expected: [123, 53, 23, 123, -432, 3, 2, 12],
    },
    { input: [[1, 2, 3, 4, 5], 0], expected: [1, 2, 3, 4, 5] },
    { input: [[1, 1, 1, 1, 1, 1], 2], expected: [1, 1, 1, 1, 1, 1] },
    {
      input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      input: [[-1000, -999, -998, -997, -996], -1000],
      expected: [-1000, -999, -998, -997, -996],
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const [arr, shift] = input;

    it(`Test case ${index + 1}: Array [${arr}] with shift ${shift}`, () => {
      expect(shiftArrayElements(arr as number[], shift as number)).toEqual(
        expected
      );
    });
  });
});

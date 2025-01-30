import { isToeplitz } from "./index";

describe("isToeplitz", () => {
  const testCases = [
    {
      expected: true,
      matrix: [
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
      ],
    },
    {
      expected: false,
      matrix: [
        [1, 2],
        [2, 2],
      ],
    },
    {
      expected: true,
      matrix: [
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
        [1, 9, 5, 1],
      ],
    },
  ];

  testCases.forEach(({ expected, matrix }) => {
    it(`should return ${expected} for matrix = ${matrix}`, () => {
      expect(isToeplitz(matrix)).toBe(expected);
    });
  });
});

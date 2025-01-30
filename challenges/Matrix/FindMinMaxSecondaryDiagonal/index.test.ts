import { findMinMaxSecondaryDiagonal } from ".";

describe("Find Min and Max of Secondary Diagonal", () => {
  const testCases = [
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [3, 7],
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [3, 7],
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [3, 7],
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [3, 7],
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [3, 7],
    },
  ];

  testCases.forEach(({ matrix, expected }) => {
    it(`should return ${expected} for matrix = ${matrix}`, () => {
      expect(findMinMaxSecondaryDiagonal(matrix)).toEqual(expected);
    });
  });
});

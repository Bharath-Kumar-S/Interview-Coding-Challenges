import { findRowWithTarget } from ".";

describe("findRowWithTarget", () => {
  const testCases = [
    {
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      target: 7,
      expected: 1,
    },
    {
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      target: 10,
      expected: 2,
    },
    {
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      target: 16,
      expected: 3,
    },
    {
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      target: 0,
      expected: -1,
    },
    {
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      target: 17,
      expected: -1,
    },
  ];

  testCases.forEach(({ matrix, target, expected }) => {
    it(`should return ${expected} for target = ${target}`, () => {
      expect(findRowWithTarget(matrix, target)).toBe(expected);
    });
  });
});

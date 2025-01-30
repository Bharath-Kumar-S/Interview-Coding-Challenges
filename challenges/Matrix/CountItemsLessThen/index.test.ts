import { countLessThan } from ".";

describe("countLessThan", () => {
  const testCases = [
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      x: 5,
      expected: 4,
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      x: 10,
      expected: 9,
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      x: 0,
      expected: 0,
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      x: 1,
      expected: 0,
    },
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      x: 9,
      expected: 8,
    },
  ];

  testCases.forEach(({ matrix, x, expected }) => {
    it(`should return ${expected} for matrix = ${matrix} and x = ${x}`, () => {
      expect(countLessThan(matrix, x)).toBe(expected);
    });
  });
});

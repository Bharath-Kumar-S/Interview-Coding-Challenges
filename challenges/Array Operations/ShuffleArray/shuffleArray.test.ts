import { shuffleArray } from ".";

describe("shuffleArray", () => {
  const testCases = [
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 8],
      k: 3,
      expected: [1, 2, 4, 5, 7, 8, 3, 6],
    },
  ];

  testCases.forEach(({ nums, k, expected }) => {
    it(`should return the array ${expected} when given ${nums} and k = ${k}`, () => {
      expect(shuffleArray(nums, k)).toEqual(expected);
    });
  });
});

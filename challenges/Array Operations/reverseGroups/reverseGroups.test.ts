import { reverseGroups } from ".";

describe("reverseGroups", () => {
  const testCases = [
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 8],
      k: 3,
      expected: [3, 2, 1, 6, 5, 4, 8, 7],
    },
  ];
  testCases.forEach(({ nums, k, expected }) => {
    it(`should return the array ${expected} when given ${nums} and k = ${k}`, () => {
      expect(reverseGroups(nums, k)).toEqual(expected);
    });
  });
});

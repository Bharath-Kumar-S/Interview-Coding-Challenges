import { isSubarray } from ".";

describe("isSubarray", () => {
  const testCases = [
    { arr: [1, 2, 3, 4, 5], subArr: [2, 3, 4], expected: true },
    { arr: [1, 2, 3, 4, 5], subArr: [3, 4, 5], expected: true },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3], expected: true },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5], expected: true },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
    { arr: [1, 2, 3, 4, 5], subArr: [1, 2, 3, 4, 5, 6], expected: false },
  ];

  testCases.forEach(({ arr, subArr, expected }) => {
    it(`should return ${expected} for array ${JSON.stringify(
      arr
    )} and subarray ${JSON.stringify(subArr)}`, () => {
      expect(isSubarray(arr, subArr)).toBe(expected);
    });
  });

  it("should return false for empty array", () => {
    expect(isSubarray([], [1])).toBe(false);
  });
});

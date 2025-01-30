import { rotateArray } from ".";

describe("Rotate Array", () => {
  const testCases = [
    { arr: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
    { arr: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
    { arr: [1, 2, 3, 4, 5, 6], k: 2, expected: [5, 6, 1, 2, 3, 4] },
    { arr: [1, 2], k: 3, expected: [2, 1] },
    { arr: [1, 2], k: 1, expected: [2, 1] },
    { arr: [1, 2], k: 0, expected: [1, 2] },
    { arr: [1, 2], k: 2, expected: [1, 2] },
  ];

  testCases.forEach(({ arr, k, expected }) => {
    it(`should return ${expected} for arr = ${arr} and k = ${k}`, () => {
      expect(rotateArray(arr, k)).toEqual(expected);
    });
  });
});

import { countOccurrences, countOccurrences2 } from ".";

describe("countOccurrences", () => {
  const testCases = [
    { inputArray: [2, 2, 3, 4, 2, 6, 7, 2, 9, 10], element: 2, expected: 4 },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], element: 2, expected: 1 },
  ];

  testCases.forEach(({ inputArray, element, expected }) => {
    test(`should return ${expected} for array ${JSON.stringify(
      inputArray
    )} and element ${element}`, () => {
      expect(countOccurrences(inputArray, element)).toBe(expected);
    });
  });

  testCases.forEach(({ inputArray, element, expected }) => {
    test(`should return ${expected} for array ${JSON.stringify(
      inputArray
    )} and element ${element}`, () => {
      expect(countOccurrences2(inputArray, element)).toBe(expected);
    });
  });
});

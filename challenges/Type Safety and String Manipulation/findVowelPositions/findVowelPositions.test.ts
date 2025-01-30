import { findVowelPositions } from ".";

describe("findVowelPositions", () => {
  const testCases = [
    { input: "Hello", expected: [1, 4] },
    { input: "", expected: [] },
    { input: "aeiou", expected: [0, 1, 2, 3, 4] },
    { input: "xyz", expected: [] },
    { input: "AEIOU", expected: [0, 1, 2, 3, 4] },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`returns ${JSON.stringify(expected)} for input "${input}"`, () => {
      expect(findVowelPositions(input)).toEqual(expected);
    });
  });
});

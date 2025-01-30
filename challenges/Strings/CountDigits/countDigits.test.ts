import { countDigits, countDigitsUsingRegex } from ".";

describe("Count Digits", () => {
  const testCases = [
    { expected: 1, text: "A1" },
    { expected: 1, text: "A1B" },
    { expected: 2, text: "A1B2" },
    { expected: 2, text: "A1B2C" },
    { expected: 0, text: "ABC" },
    { expected: 0, text: "" },
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for ${testCase.text}`, () => {
      expect(countDigits(testCase.text)).toBe(testCase.expected);
    });
  });

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for ${testCase.text} using regex`, () => {
      expect(countDigitsUsingRegex(testCase.text)).toBe(testCase.expected);
    });
  });
});

import { isPerfectSquare } from ".";

describe("isPerfectSquare", () => {
  const testCases = [
    { input: 16, expected: true },
    { input: 14, expected: false },
    { input: 9, expected: true },
    { input: 25, expected: true },
    { input: 1, expected: true },
    { input: 0, expected: true },
    { input: -1, expected: false },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for input ${input}`, () => {
      expect(isPerfectSquare(input)).toBe(expected);
    });
  });
});

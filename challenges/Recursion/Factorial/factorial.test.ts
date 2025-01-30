import { factorial, factorialIterative } from ".";

describe(`factorial`, () => {
  const testCases = [
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: 6 },
    { input: 4, expected: 24 },
    { input: 5, expected: 120 },
    { input: 6, expected: 720 },
    { input: 7, expected: 5040 },
    { input: 8, expected: 40320 },
    { input: 9, expected: 362880 },
    { input: 10, expected: 3628800 },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for input ${input}`, () => {
      expect(factorialIterative(input)).toBe(expected);
    });
  });
});

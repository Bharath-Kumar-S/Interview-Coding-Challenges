import { nextPrime } from ".";

describe("nextPrime", () => {
  const testCases = [
    { input: 1, expected: 2 },
    { input: 2, expected: 3 },
    { input: 3, expected: 5 },
    { input: 4, expected: 5 },
    { input: 5, expected: 7 },
    { input: 6, expected: 7 },
    { input: 7, expected: 11 },
    { input: 8, expected: 11 },
    { input: 9, expected: 11 },
    { input: 10, expected: 11 },
    { input: 11, expected: 13 },
    { input: 12, expected: 13 },
    { input: 13, expected: 17 },
    { input: 14, expected: 17 },
    { input: 15, expected: 17 },
    { input: 16, expected: 17 },
    { input: 17, expected: 19 },
    { input: 18, expected: 19 },
    { input: 19, expected: 23 },
    { input: 20, expected: 23 },
    { input: 21, expected: 23 },
    { input: 22, expected: 23 },
    { input: 23, expected: 29 },
    { input: 24, expected: 29 },
    { input: 25, expected: 29 },
    { input: 26, expected: 29 },
    { input: 27, expected: 29 },
    { input: 28, expected: 29 },
    { input: 29, expected: 31 },
    { input: 30, expected: 31 },
    { input: 31, expected: 37 },
    { input: 32, expected: 37 },
    { input: 33, expected: 37 },
    { input: 34, expected: 37 },
    { input: 35, expected: 37 },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for input ${input}`, () => {
      expect(nextPrime(input)).toBe(expected);
    });
  });
});

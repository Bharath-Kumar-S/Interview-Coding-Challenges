import { nthPrime } from ".";

describe("nthPrime", () => {
  const testCases = [
    { input: 1, expected: 2 },
    { input: 2, expected: 3 },
    { input: 3, expected: 5 },
    { input: 4, expected: 7 },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for input ${input}`, () => {
      expect(nthPrime(input)).toBe(expected);
    });
  });
});

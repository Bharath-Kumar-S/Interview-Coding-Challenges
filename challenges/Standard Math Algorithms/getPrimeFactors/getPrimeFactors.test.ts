import { getPrimeFactors } from ".";

describe("getPrimeFactors", () => {
  const testCases = [
    { input: 1, expected: [] },
    { input: 2, expected: [2] },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for input ${input}`, () => {
      expect(getPrimeFactors(input)).toEqual(expected);
    });
  });
});

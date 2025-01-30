import { areCoprime } from ".";

describe("isCoPrime", () => {
  const testCases = [
    { a: 15, b: 28, expected: true },
    { a: 21, b: 14, expected: false },
    { a: 17, b: 19, expected: true },
    { a: 12, b: 18, expected: false },
    { a: 35, b: 64, expected: true },
    { a: 8, b: 9, expected: true },
    { a: 10, b: 20, expected: false },
    { a: 7, b: 13, expected: true },
    { a: 25, b: 30, expected: false },
    { a: 11, b: 22, expected: false },
  ];

  testCases.forEach(({ a, b, expected }) => {
    test(`areCoprime(${a}, ${b}) should return ${expected}`, () => {
      expect(areCoprime(a, b)).toBe(expected);
    });
  });
});

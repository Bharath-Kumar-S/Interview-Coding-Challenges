import { sumToPowers } from ".";

describe("sumToPowers", () => {
  const testCases = [
    { n: 253, expected: 36 },
    { n: 1000, expected: 1 },
  ];

  testCases.forEach(({ n, expected }) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(sumToPowers(n)).toBe(expected);
    });
  });
});

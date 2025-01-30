import { commonChars } from ".";

describe("Common Characters", () => {
  const testCases = [
    {
      A: "bella",
      B: "label",
      expected: "bella",
    },
  ];

  testCases.forEach(({ A, B, expected }) => {
    it(`should return the array ${expected} when given ${A}`, () => {
      expect(commonChars(A, B)).toEqual(expected);
    });
  });
});

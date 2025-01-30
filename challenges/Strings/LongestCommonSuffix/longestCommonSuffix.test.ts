import { longestCommonSuffix } from ".";

describe("longestCommonSuffix", () => {
  const testCases = [
    {
      input: ["parking", "barking", "fighting"],
      expected: "ing",
    },
    {
      input: ["dog", "racecar", "car"],
      expected: "",
    },
    {
      input: ["", ""],
      expected: "",
    },
    {
      input: ["a"],
      expected: "a",
    },
    {
      input: ["a", "a"],
      expected: "a",
    },
    {
      input: ["a", "b"],
      expected: "",
    },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(longestCommonSuffix(input)).toBe(expected);
    });
  });
});

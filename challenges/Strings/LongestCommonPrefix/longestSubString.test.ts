import { longestCommonPrefix } from ".";

describe("longestSubString", () => {
  const testCases = [
    {
      strs: ["flower", "flow", "flight"],
      expected: "fl",
    },
    {
      strs: ["dog", "racecar", "car"],
      expected: "",
    },
  ];

  testCases.forEach(({ strs, expected }) => {
    it(`should return the string ${expected} when given ${strs}`, () => {
      expect(longestCommonPrefix(strs)).toEqual(expected);
    });
  });
});

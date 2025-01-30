import { reverseString } from ".";

describe("reverseString", () => {
  const testCases = [
    ["hello", "olleh"],
    ["world", "dlrow"],
    ["", ""],
    ["a", "a"],
    ["ab", "ba"],
    ["abc", "cba"],
    ["abcd", "dcba"],
    ["abcde", "edcba"],
    ["abcdef", "fedcba"],
    ["abcdefghijklmnopqrstuvwxy", "yxwvutsrqponmlkjihgfedcba"],
    ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"],
  ];

  testCases.forEach(([s, expected]) => {
    it(`should return ${expected} for s = ${s}`, () => {
      expect(reverseString(s)).toBe(expected);
    });
  });
});

import { changeCases } from ".";

describe("changeCases", () => {
  const testCases = [
    { input: "hello world", expected: "HELLO WORLD" },
    { input: "HELLO WORLD", expected: "hello world" },
    { input: "Hello World", expected: "hELLO wORLD" },
    { input: "123", expected: "123" },
    { input: "hElLo WoRlD", expected: "HeLlO wOrLd" },
    { input: "", expected: "" },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should change cases for "${input}" to "${expected}"`, () => {
      expect(changeCases(input)).toBe(expected);
    });
  });
});

import { nextAlphabet } from ".";

describe("nextAlphabet", () => {
  const testCases = [
    { input: "Hello", expected: "Ifmmp" },
    { input: "", expected: "" },
    { input: "aeiou", expected: "bfjpv" },
    { input: "xyz", expected: "yza" },
    { input: "AEIOU", expected: "BFJPV" },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`returns ${JSON.stringify(expected)} for input "${input}"`, () => {
      expect(nextAlphabet(input)).toEqual(expected);
    });
  });
});

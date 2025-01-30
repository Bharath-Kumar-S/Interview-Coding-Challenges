import { encryptedText } from ".";

describe("Caesar Cipher", () => {
  const testCases = [
    { expected: "B", text: "A", shift: 1 },
    { expected: "B", text: "A", shift: 27 },
    { expected: "Bharath", shift: 3, text: "Yexoxqe" },
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for ${testCase.text} with shift ${testCase.shift}`, () => {
      expect(encryptedText(testCase.text, testCase.shift)).toBe(
        testCase.expected
      );
    });
  });
});

import { isPalindrome } from ".";

describe("isPalindrome", () => {
  const testCases = [
    { input: "racecar", expected: true },
    { input: "hello", expected: false },
    { input: "madam", expected: true },
    { input: "step on no pets", expected: true },
    { input: "Was it a car or a cat I saw", expected: true },
    { input: "No lemon, no melon", expected: true },
    { input: "12321", expected: true },
    { input: "12345", expected: false },
    { input: "", expected: true },
    { input: "A man, a plan, a canal, Panama", expected: true },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for input "${input}"`, () => {
      expect(isPalindrome(input)).toBe(expected);
    });
  });
});

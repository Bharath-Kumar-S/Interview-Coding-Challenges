import { secondLargest } from ".";

describe("secondLargest with various test arrays", () => {
  const testCases = [
    { input: [1, 2, 3, 4, 5], expected: 4 },
    { input: [-10, -20, -30, -40, -50], expected: -20 },
    { input: [-10, 20, 30, -40, 50], expected: 30 },
    { input: [1, 2, 2, 3, 3, 4, 4, 5, 5], expected: 4 },
    { input: [1], expected: null },
    { input: [], expected: null },
    { input: [5, 5, 5, 5, 5], expected: null },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for array ${JSON.stringify(input)}`, () => {
      expect(secondLargest(input)).toBe(expected);
    });
  });
});

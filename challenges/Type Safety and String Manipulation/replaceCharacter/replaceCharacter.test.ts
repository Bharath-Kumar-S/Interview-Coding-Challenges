import { replaceCharacter } from ".";

describe("replaceCharacter", () => {
  const testCases = [
    { inputString: "hello", char1: "l", char2: "z", expected: "hezzo" },
    { inputString: "hello", char1: "o", char2: "z", expected: "hellz" },
    { inputString: "hello", char1: "h", char2: "z", expected: "zello" },
    { inputString: "hello", char1: "e", char2: "z", expected: "hzllo" },
    { inputString: "hello", char1: "a", char2: "z", expected: "hello" },
    { inputString: "hello", char1: "l", char2: "z", expected: "hezzo" },
  ];

  testCases.forEach(({ inputString, char1, char2, expected }) => {
    test(`returns ${JSON.stringify(
      expected
    )} for input "${inputString}"`, () => {
      expect(replaceCharacter(inputString, char1, char2)).toEqual(expected);
    });
  });
});

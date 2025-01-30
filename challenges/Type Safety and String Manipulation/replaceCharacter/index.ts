export const replaceCharacter = (
  inputString: string,
  char1: string,
  char2: string
): string => {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === char1) {
      result += char2;
    } else {
      result += inputString[i];
    }
  }
  return result;
};

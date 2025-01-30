export const isPalindrome = (inputString: string): boolean => {
  let str = "",
    revStr = "";
  for (let i = 0; i < inputString.length; i++) {
    if (isAlphaNumeric(inputString[i])) {
      str += inputString[i].toLowerCase();
      revStr = inputString[i].toLowerCase() + revStr;
    }
  }
  return str === revStr;
};

function isAlphaNumeric(char: string): boolean {
  // Helper function to check if a character is alphanumeric
  return char.match(/[a-z0-9]/i) !== null;
}

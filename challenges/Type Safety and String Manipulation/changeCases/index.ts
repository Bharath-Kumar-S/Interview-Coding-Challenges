export const changeCases = (s: string): string => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      // Uppercase to lowercase
      result += String.fromCharCode(char + 32);
    } else if (char >= 97 && char <= 122) {
      // Lowercase to uppercase
      result += String.fromCharCode(char - 32);
    } else {
      // Non-letter characters remain unchanged
      result += s[i];
    }
  }
  return result;
};

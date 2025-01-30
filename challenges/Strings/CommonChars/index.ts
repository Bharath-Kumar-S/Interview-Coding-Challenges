export const commonChars = (string1: string, string2: string): string => {
  const result: string[] = [];
  const charCount: Record<string, number> = {};

  // Create a frequency map for characters in string2
  for (const char of string2) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through string1 and add common characters to result
  for (const char of string1) {
    if (charCount[char] && charCount[char] > 0) {
      result.push(char);
      charCount[char]--; // Decrease count to prevent overuse
    }
  }

  return result.join("");
};

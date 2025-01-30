export const findVowelPositions = (s: string): number[] => {
  if (s.length === 0) return [];

  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      result.push(i);
    }
  }
  return result;
};

// The time complexity of the findVowelPositions function is O(n), where n is the length of the input string s.
// This is because the function iterates through each character of the string exactly once.

// The space complexity of the function is O(k), where k is the number of vowels in the input string s.
// This is because the function stores the positions of the vowels in the result array.

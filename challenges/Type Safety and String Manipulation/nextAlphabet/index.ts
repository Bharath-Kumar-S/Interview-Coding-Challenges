// export const nextAlphabet = (s: string): string => {
//   if (s.length === 0) return "";

//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     let charCode = s.charCodeAt(i);
//     if (charCode >= 65 && charCode <= 90) {
//       // Uppercase letter
//       result += String.fromCharCode(((charCode - 65 + 1) % 26) + 65);
//     } else if (charCode >= 97 && charCode <= 122) {
//       // Lowercase letter
//       result += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
//     } else {
//       // Non-letter character
//       result += s[i];
//     }
//   }
//   return result;
// };

export const nextAlphabet = (s: string): string => {
  if (s.length === 0) return "";

  let result = "";
  let lowserCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (lowserCase.includes(s[i])) {
      result += lowserCase[(lowserCase.indexOf(s[i]) + 1) % 26];
    } else if (upperCase.includes(s[i])) {
      result += upperCase[(upperCase.indexOf(s[i]) + 1) % 26];
    } else {
      result += s[i];
    }
  }
  return result;
};

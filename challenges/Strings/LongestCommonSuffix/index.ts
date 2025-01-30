export const longestCommonSuffix = (strs: string[]): string => {
  if (strs.length === 0) return "";

  const reverse = (str: string): string => str.split("").reverse().join("");

  let reversedArr = strs.map(reverse);
  let shortest = reversedArr.reduce((a, b) => (a.length <= b.length ? a : b));

  for (let i = 0; i < shortest.length; i++) {
    for (let j = 0; j < reversedArr.length; j++) {
      if (reversedArr[j][i] !== shortest[i]) {
        return reverse(shortest.slice(0, i));
      }
    }
  }

  return reverse(shortest);
};

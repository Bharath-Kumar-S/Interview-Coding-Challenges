export const longestCommonPrefix = (strs: string[]): string => {
  //base case
  if (!strs.length) return "";

  let shortest: string = strs.reduce((a, b) => (a.length <= b.length ? a : b));

  for (let i = 0; i < shortest.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== shortest[i]) {
        return shortest.slice(0, i);
      }
    }
  }

  return shortest;
};

export const countDigits = (text: string): number => {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i].match(/[0-9]/)) {
      count++;
    }
  }

  return count;
};

export const countDigitsUsingRegex = (text: string): number => {
  return text.match(/\d/g)?.length || 0;
};

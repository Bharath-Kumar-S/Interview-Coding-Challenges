export const isPerfectSquare = (num: number): boolean => {
  if (num < 0) {
    return false;
  }
  const x = Math.sqrt(num);
  return x === Math.floor(x);
};

//without using Math.sqrt
export const isPerfectSquare2 = (num: number): boolean => {
  if (num < 0) {
    return false;
  }
  let i = 1;
  while (i * i <= num) {
    if (i * i === num) {
      return true;
    }
    i++;
  }
  return false;
};

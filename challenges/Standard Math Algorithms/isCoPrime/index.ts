function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export const areCoprime = (a: number, b: number): boolean => {
  return gcd(a, b) === 1;
};

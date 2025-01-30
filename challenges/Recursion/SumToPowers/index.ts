export function sumToPowers(n: number, pos: number = 1): number {
  // TODO: implement
  if (n === 0) {
    return 0;
  } else {
    let d = Math.pow(n % 10, pos);
    pos++;
    n = Math.floor(n / 10);
    return d + sumToPowers(n, pos);
  }
}

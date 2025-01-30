const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

export const nextPrime = (n: number): number => {
  n = n + 1;

  if (n > 2 && n % 2 === 0) n++;

  while (!isPrime(n)) {
    n += 2;
  }

  return n;
};

export const getPrimeFactors = (n: number): number[] => {
  if (n < 2) {
    return []; // No prime factors for numbers less than 2
  }

  const primeFactors: number[] = [];
  let divisor = 2;

  // Step 1: Divide by 2 until n is odd
  while (n % divisor === 0) {
    if (!primeFactors.includes(divisor)) {
      primeFactors.push(divisor);
    }
    n = n / divisor;
  }

  // Step 2: Check odd divisors from 3 up to √n
  divisor = 3;
  while (divisor * divisor <= n) {
    while (n % divisor === 0) {
      if (!primeFactors.includes(divisor)) {
        primeFactors.push(divisor);
      }
      n = n / divisor;
    }
    divisor += 2; // Increment by 2 to skip even numbers
  }

  // Step 3: If n is still greater than 1, it must be a prime number
  if (n > 1) {
    primeFactors.push(n);
  }

  return primeFactors;
};

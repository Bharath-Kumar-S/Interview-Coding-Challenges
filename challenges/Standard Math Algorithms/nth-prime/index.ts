export const nthPrime = (n: number): number => {
  if (n < 1) {
    throw new Error("n must be a positive integer.");
  }

  // Step 1: Start with the first prime number
  const primes: number[] = [2];
  let candidate = 3; // Start checking from 3

  // Step 2: Continue until we have n primes
  while (primes.length < n) {
    let isPrime = true;

    // Step 3: Primality test
    const sqrtCandidate = Math.sqrt(candidate);
    for (const prime of primes) {
      if (prime > sqrtCandidate) break; // No need to check beyond √candidate
      if (candidate % prime === 0) {
        isPrime = false;
        break;
      }
    }

    // Step 4: Add to the list if it's a prime
    if (isPrime) {
      primes.push(candidate);
    }

    // Step 5: Move to the next odd number
    candidate += 2;
  }

  // Step 6: Return the n-th prime
  return primes[n - 1];
};

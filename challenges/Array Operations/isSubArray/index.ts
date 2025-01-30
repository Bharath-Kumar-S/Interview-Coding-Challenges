export function isSubarray(arrayA: number[], arrayB: number[]): boolean {
  // If arrayB is empty, it cannot be a subarray
  if (arrayB.length === 0) return false;

  // Loop through arrayA to find a potential starting point
  for (let i = 0; i <= arrayA.length - arrayB.length; i++) {
    let isMatch = true;

    // Check if elements of arrayB match in arrayA from current position
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i + j] !== arrayB[j]) {
        isMatch = false;
        break;
      }
    }

    // If all elements matched, return true
    if (isMatch) return true;
  }

  // If no match found, return false
  return false;
}

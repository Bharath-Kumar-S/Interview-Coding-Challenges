export const rotateArray = (arr: number[], k: number): number[] => {
  k = k % arr.length; // Ensure k is within the bounds of the array length
  let rotated: number[] = arr.slice(-k).concat(arr.slice(0, -k));
  return rotated;
};

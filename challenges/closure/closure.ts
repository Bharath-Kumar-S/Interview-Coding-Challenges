export function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

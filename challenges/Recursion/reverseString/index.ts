export function reverseString(s: string): string {
  // TODO: implement the function to reverse the string using recursion.
  if (s.length <= 1) {
    return s;
  } else {
    return s[s.length - 1] + reverseString(s.slice(0, -1));
  }
}

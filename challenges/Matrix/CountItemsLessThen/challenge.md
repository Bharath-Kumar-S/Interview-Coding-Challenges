You're given a matrix where each row is sorted in ascending order. The columns are also sorted in ascending order. This creates a special pattern where the values in the matrix increase as you move right or down but decrease as you move left or up.

Your task is to write a TypeScript function that counts the number of integers in the matrix that are smaller than the given target. The function should return this count as an integer. Ignore any instances where a number equals the target, even if the target appears multiple times in the matrix.

If there are no integers in the matrix that are smaller than the given target return 0.

The expected complexity is
O
(
n

- m
  )
  O(n+m), where
  n
  n is the number of rows and
  m
  m is the number of columns in the matrix.

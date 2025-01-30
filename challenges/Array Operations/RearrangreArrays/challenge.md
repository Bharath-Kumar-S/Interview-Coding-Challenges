You are given an array of n integers. Write a function that rearranges the array so that the middle half of the elements (considering the left and right quarters have been eliminated) move to the beginning of the array. The remaining elements, the left and right quarters, should move to the end of the array. If n is not divisible by 4, include the extra elements in the middle half.

Specifically:

Divide the array into four quarters.
Move the second and third quarters to the front.
Move the first and fourth quarters to the back.
If there are extra elements because n is divisible by 4, include these elements at the start of the section consisting of the middle quarters (the second and third quarters).
The function should modify the array in place.

For example, if the input array is [1, 2, 3, 4, 5, 6, 7, 8], your function should rearrange the array to [3, 4, 5, 6, 1, 2, 7, 8].

The solution should have a time complexity of
O
(
n
)
O(n).

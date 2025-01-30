You are given two strings, string1 and string2. Your goal is to determine a new string, string3, that is formed by characters that occur in both string1 and string2 in the same order as they occur in string1.

Characters in string3 should maintain their original sequence order from string1. If a character is repeated in string1 and string2, include that character in string3 as many times as it occurs in both strings, but not more than that.

For example, given string1 = "apple" and string2 = "peach", the resulting string3 would be "ape".

Your algorithm should not exceed a time complexity of
O
(
s
t
r
i
n
g

1.  l
    e
    n
    g
    t
    h

- s
  t
  r
  i
  n
  g

2.  l
    e
    n
    g
    t
    h
    )
    O(string1.length+string2.length).

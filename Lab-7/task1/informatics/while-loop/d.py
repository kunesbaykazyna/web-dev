n = int(input())
res = 1

while res < n:
    res *= 2

if res == n:
    print("Yes")
else:
    print("No")
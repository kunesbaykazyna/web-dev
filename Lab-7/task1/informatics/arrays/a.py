n = int(input())
elements = input().split()

a = []
for x in elements:
    a.append(int(x))

for i in range(0, n, 2):
    print(a[i], end=' ')
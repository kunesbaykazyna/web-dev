n = int(input())
elements = input().split()

a = []
for x in elements:
    a.append(int(x))

for i in range(0, n, 1):
    if  a[i]%2==0:
        print(a[i], end=' ')
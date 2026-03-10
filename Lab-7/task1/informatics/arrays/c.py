n = int(input())
elements = input().split()
cnt=0
a = []
for x in elements:
    a.append(int(x))

for i in range(0, n, 1):
    if  a[i]>0:
        cnt+=1
        
print(cnt)
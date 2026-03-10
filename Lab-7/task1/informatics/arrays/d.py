n = int(input())
elements = input().split()
cnt=0
a = []
for x in elements:
    a.append(int(x))

for i in range(1,n):
    if  a[i]>a[i-1]:
        cnt+=1
        
print(cnt)
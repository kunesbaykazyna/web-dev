import math
a=int(input())
b=int(input())
if b>a:
    for i in range(a,b+1):
        if math.sqrt(i)**2==i:
            print(i)
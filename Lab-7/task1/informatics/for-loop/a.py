a=int(input())
b=int(input())
if a>b:
    print("Error")
else:
    for i in range(a-1, b):
        if i%2==0:
            print(i,end=" ")
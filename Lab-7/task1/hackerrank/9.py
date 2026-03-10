n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    student_marks[name] = list(map(float, line))

query_name = input()
marks = student_marks[query_name]
average = sum(marks) / len(marks)
print(f"{average:.2f}") 
input_file = "data.txt"
f = open(input_file)
result = 0
content = f.read()

for line in content.splitlines():
    report = list(map(int, line.split()))
    ascending = all(report[i] < report[i+1] and report[i+1] - report[i] <= 3 for i in range(len(report)-1))
    descending = all(report[i] > report[i+1] and report[i] - report[i+1] <= 3 for i in range(len(report)-1))
    if ascending or descending:
        result += 1
print(result)
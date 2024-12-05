input_file = "data.txt"
f = open(input_file)
result = 0
content = f.read()
def check_ascending(report):
    for i in range(len(report)):
        rep = report[:i] + report[i+1:]
        print(rep)
        ascending = all(rep[i] < rep[i+1] and rep[i+1] - rep[i] <= 3 for i in range(len(rep)-1))
        if ascending:
            return 1
    return 0

def check_descending(report):
    for i in range(len(report)):
        rep = report[:i] + report[i+1:]
        descending = all(rep[i] > rep[i+1] and rep[i] - rep[i+1] <= 3 for i in range(len(rep)-1))
        if descending:
            return 1
    return 0

for line in content.splitlines():
    report = list(map(int, line.split()))
    result += check_ascending(report)
    result += check_descending(report)
print(result)

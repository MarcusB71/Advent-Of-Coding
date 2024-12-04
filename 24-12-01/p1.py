input_file = "data.txt"
f = open(input_file)
left = []
right = []
result = 0

content = f.read()

for line in content.splitlines():
    l, r = map(int, line.split())
    left.append(l)
    right.append(r)

left.sort()
right.sort()
data_len = len(left)

for x in range(data_len):
    result += abs(left[x] - right[x])
print(result)

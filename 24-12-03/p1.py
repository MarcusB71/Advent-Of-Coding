import re
input_file = "data.txt"
f = open(input_file)

regex = "mul\([0-9]*,[0-9]*\)"

content = f.read()
matches = re.findall(regex, content)

def multiply(mul):
    result = 0
    pattern = "\d+"
    for val in mul:
        parts = re.findall(pattern, val)
        result += int(parts[0]) * int(parts[1])
    return result

print(multiply(matches))

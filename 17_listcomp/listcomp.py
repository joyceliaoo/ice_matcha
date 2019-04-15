# Team J^2 -- Puneet Johal, Joyce Liao
# SoftDev2 pd8
# K#17 -- PPFTLCW
# 2019-04-12

"['00', '22', '44', '66', '88']"
# 1a
oneA = []
for i in range(5):
    oneA.append(i*22)

print(oneA)

# 1b
oneB = [x*11 for x in range(5)]
print(oneB)
# =====================================

"[7, 17, 27, 37, 47]"
# 2a
twoA = []
for i in range(5):
    twoA.append(i*10 + 7)

print(twoA)

# 2b
twoB = [x*10+7 for x in range(5)]

print(twoB)
# =====================================

"[0, 0, 0, 0, 1, 2, 0, 2, 4]"
# 3a
threeA = []
for i in range(9):
    threeA.append((i%3) * (i/3))
print(threeA)

# 3b
threeB = [(x%3) * (x/3) for x in range(9)]
print(threeB)
# =====================================

"All divisors of a number, listed in ascending order."
# 6a
def get_div(num):
    divisors = []
    for i in range (1, num / 2 + 1):
        if (num%i == 0):
            divisors.append(i)
    divisors.append(num)
    return divisors

print(get_div(20))
print(get_div(100))
print(get_div(31))

# 6b
def get_div_lc(num):
    return [x for x in range(1,num+1) if num%x == 0]
print(get_div_lc(20))
print(get_div_lc(100))
print(get_div_lc(31))
# =====================================

"Composites on range [0,100], in ascending order."
# 4a
fourA = []
for i in range(101):
    if (len(get_div(i)) > 2):
        fourA.append(i)
print(fourA)

# 4b
fourB = [x for x in range(101) if len(get_div_lc(x)) > 2]
print(fourB)
# =====================================

"Primes on range [0,100], in ascending order."
# 5a
fiveA = []
for i in range(2,101):
    if (len(get_div(i)) <= 2):
        fiveA.append(i)
print(fiveA)

# 5b
fiveB = [x for x in range(2,101) if len(get_div_lc(x)) <= 2]
print(fiveB)

print((len(fourA) + len(fiveA)) == 99) # 101 nums on [0, 100] not counting 0 and 1
print((len(fourB) + len(fiveB)) == 99)
# =====================================

"Transpose a matrix (turn rows into columns and vice-versa...)"
# 7a
matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]
transposed = []
for col in range(len(matrix[0])):
    transposed.append([])
    for row in matrix:
        transposed[col].append(row[col])
print(transposed)

# 7b
transposed_lc = [[row[col] for row in matrix] for col in range(len(matrix[0]))]
print(transposed_lc)

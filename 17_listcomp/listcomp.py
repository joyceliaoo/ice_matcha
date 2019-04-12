# Team J^2 -- Puneet Johal, Joyce Liao
# SoftDev2 pd8
# K#17 -- PPFTLCW
# 2019-04-12

# ['00', '22', '44', '66', '88']
# 1a
oneA = []
for i in range(5):
    oneA.append(i*22)

print(oneA)

# 1b
oneB = [x*11 for x in range(5)]
print(oneB)


# [7, 17, 27, 37, 47]
# 2a
twoA = []
for i in range(5):
    twoA.append(i*10 + 7)

print(twoA)

# 2b
twoB = [x*10+7 for x in range(5)]

print(twoB)

# [0, 0, 0, 0, 1, 2, 0, 2, 4]
# 3a
threeA = []
for i in range(9):
    threeA.append((i%3) * (i/3))
print(threeA)

# 3b
threeB = [(x%3) * (x/3) for x in range(9)]
print(threeB)

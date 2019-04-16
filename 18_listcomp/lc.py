# Joyce Liao, Hui Min Wu
# SoftDev2 pd8
# K18 -- Getting Clever with List Comprehensions
# 2019-04-16

def pythtr(n):
    '''Return all Pythagorean Triplets on [1,n).'''
    return [(a,b,c) for a in range(1,n) for b in range(1,n) for c in range(1,n) if a*a + b*b == c*c]

print(pythtr(40))

def quicksort(og_list):
    '''Quicksort using list comprehension.'''
    if (len(og_list) <= 1):
        return og_list
    pivot = og_list[-1]
    small_list = [og_list[i] for i in range(len(og_list) - 1) if og_list[i] < pivot]
    big_list = [og_list[i] for i in range(len(og_list) - 1) if og_list[i] >= pivot]
    return quicksort(small_list) + [pivot] + quicksort(big_list)

print(quicksort([63,79,81,57,34,21,19]))
print(quicksort([4,8,8,3,4,5,6,7,1]))

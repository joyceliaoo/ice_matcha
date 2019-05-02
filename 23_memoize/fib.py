# Joyce Liao
# SoftDev2 pd8
# K23 --
# 2019-05-01

# memoized fib calculator
def memoize(f):
	memo = {}
	def helper(x):
		nonlocal memo
		# print("checking " + str(x))
		if (x in memo.keys()):
			# print(str(x) + " already in memo, returning ...")
			return memo[x] 
		else:
			# print(str(x) + " not in memo, calling fib")
			ans = f(x)
			# print("fib gave answer")
			memo[x] = ans 
			return ans 
	return helper


def fib(n):
	# print("fib")
	if n == 0:
		return 0
	elif n == 1:
		return 1
	else:
		return fib(n-1) + fib(n-2)

# print(fib)
fib = memoize(fib) # fib now refers to helper function
# print(fib)
print(fib(3))
print(fib(30))
print(fib(100))

# via decorator

@memoize
def fib(n):
	if n == 0:
		return 0
	elif n == 1:
		return 1
	else:
		return fib(n-1) + fib(n-2)
print(fib(3))
print(fib(20))

# Joyce Liao
# Softdev2 pd8
# K22 -- Closure
# 2019-04-30

def repeat(word):
	def freq(num):
		return word*num
	return freq

r1 = repeat("hello")
print(r1(2))
r2 = repeat("goodbye")
print(r2(2))
print(repeat("cool")(3))

def make_counter():
	ct = 0
	def inc():
		nonlocal ct
		ct += 1
		return  ct
	
	def acc():
		nonlocal ct
		return ct
	return inc, acc

ctr1 = make_counter()
ct1 = ctr1[0]
ac1 = ctr1[1]
print(ct1())
print(ac1())
ctr2 = make_counter()
ct2 = ctr2[0]
ac2 = ctr2[1]
print(ct2())
print(ct1())
print(ac2())
print(ac1())




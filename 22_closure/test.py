def inc(x):
    return x + 1

f=inc

print(f(10))

def adder(a,b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)
print(contains_15 ([1,2,3,4,5]))
print(contains_15 ([13,14,15,16,17]))
print(contains_15(range(0,20)))
print(outer(15)([1,2,3]))

# r1(2) hellohello
# r2(2) goodbyegoodbye
# repeat('cool')(3)

def repeat(word):
    def freq(num):
        return word*num
    return freq

print(repeat('cool')(3))

def outer():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x

print(outer())

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer())

def make_counter():
    ct = 0
    def inc():
        nonlocal ct
        ct += 1
        print(ct)
    inc()
    return ct

ctrl = make_counter()




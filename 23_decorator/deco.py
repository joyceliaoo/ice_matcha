import random
def make_HTML_heading(f):
	def inner():
		return '<h1>' + f() + '</h1>'
	return inner

@make_HTML_heading
def greet():
	greetings = ['hello', 'hola', 'bonjour']
	return random.choice(greetings)

# greet_heading = make_HTML_heading(greet)
# print(greet_heading())
print(greet())


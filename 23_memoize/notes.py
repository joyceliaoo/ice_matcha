import random
def make_HTML_heading(f):
	txt = f()
	print(txt)
	def inner():
		return '<h1>' + txt + '</h1>'
	return inner

def greet():
	greetings = ['hello', 'hola', 'bonjour']
	return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
print(greet_heading())

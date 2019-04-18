# Team Trio -- Puneet Johal, Joyce Liao, Hui Min Wu
# SoftDev2 pd8
# K20 -- Reductio ad Absurdum
# W 2019-04-17

from functools import reduce

# file reading
with open('alice.txt', 'r') as file:
    r = file.read()
    lines = r.split("\r\n")[:1298] # story ends at line 1298
    lines = [line for line in lines if line != "" and line != "[Illustration]"] # remove empty lines

# print(lines)

words = [word.strip(",").strip(".") for line in lines for word in line.split(" ") if word != ""]
# for line in lines:
#     temp = line.split(" ")
#     for word in temp:
#         if (word != ""):
#             words.append(word.strip(",").strip("."))

# print(words)

def freq(word, text):
    '''Find frequency of word in a list of words.'''
    occr = [1 for x in text if x.lower() == word.lower()]
    return sum(occr)

target = "Alice"
print("freqency of [" + target + "]: " + str(freq(target, words)))
target = "hello"
print("freqency of [" + target + "]: " + str(freq(target, words)))
target = "rabbit"
print("freqency of [" + target + "]: " + str(freq(target, words)))

def gp_freq(phrase, text):
    '''Find frequency of a group of words in text.'''
    # count how many words are in the phrase
    num_words = len(phrase.split(" "))
    if (num_words == 1):
        return freq(phrase, text)
    # cancatenating every num_words words in list of all words
    # to make a list of all possible groups of words that are the same length as given phrase
    combos = [reduce((lambda a,b: a + " " + b),text[i:i+num_words]).lower() for i in range(len(text) - num_words + 1)]
    return freq(phrase, combos)

target = "I want to"
print("freqency of [" + target + "]: " + str(gp_freq(target, words)))
target = "I think"
print("freqency of [" + target + "]: " + str(gp_freq(target, words)))
target = "food"
print("freqency of [" + target + "]: " + str(gp_freq(target, words)))


def most_freq(text):
    '''Return [most_frequent_word, frequency].'''
    no_reps = list(set(text)) # list of unique words
    freqs = [(i, freq(no_reps[i], text)) for i in range(len(no_reps))] # generate (index, freq) pairs for every unique word
    result = reduce((lambda a,b: a if a[1] > b[1] else b), freqs) # compare list of tuples based on freq
    return [no_reps[result[0]], result[1]]

result = most_freq(words)
print("The most frequently occurring word is [" + result[0] + "] with frequency " + str(result[1]))

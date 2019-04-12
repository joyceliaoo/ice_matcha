# Joyce Liao
# SoftDev2 pd8
# K16 -- Do You Even List?
# 2019-04-12

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = UC_LETTERS.lower()
NUMS = "0123456789"
SP_CH = ".?!&#,;:-_*<>%"

def validate(password):
    if (len(password) < 6):
        return "must contain at least six characters"
    upper = [x for x in password if x in UC_LETTERS]
    lower = [x for x in password if x in LC_LETTERS]
    num = [x for x in password if x in NUMS]

    if (len(upper) == 0):
        return "must contain at least one uppercase letter"
    elif(len(lower) == 0):
        return "must contain at least one lowercase letter"
    elif(len(num) == 0):
        return "must contain at least one number"
    else:
        return "password meets min reqs"

def rate(password):
    upper = [x for x in password if x in UC_LETTERS]
    lower = [x for x in password if x in LC_LETTERS]
    num = [x for x in password if x in NUMS]
    sp = [x for x in password if x in SP_CH]
    if (len(password) < 6 or len(lower) == len(password) or len(num) == len(password)):
        return 0
    strength = 0
    threshold = len(password) / 4
    if (len(upper) >= threshold):
        strength += 2.5
    else:
        strength += len(upper) * 2.5 / threshold
    if (len(lower) >= threshold):
        strength += 2.5
    else:
        strength += len(lower) * 2.5 / threshold
    if (len(num) >= threshold):
        strength += 2.5
    else:
        strength += len(num) * 2.5 / threshold
    if (len(sp) >= threshold):
        strength += 2.5
    else:
        strength += len(sp) * 2.5 / threshold

    return int(strength)


my_pw = "imKind4huN9ry"
print("validating [" + my_pw + "]: " + validate(my_pw))
print("[" + my_pw + "] strength: " + str(rate(my_pw)))
my_pw = "imsotired"
print("validating [" + my_pw + "]: " + validate(my_pw))
print("[" + my_pw + "] strength: " + str(rate(my_pw)))
my_pw = "plsWork!<3"
print("validating [" + my_pw + "]: " + validate(my_pw))
print("[" + my_pw + "] strength: " + str(rate(my_pw)))

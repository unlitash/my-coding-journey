import random
answer = random.randint (1 , 99)

guess = input ('what is your guess? (1 - 100): ')
guess = int(guess)
guess_count = 0
while guess != answer:
    if guess > answer:
        print ('mine is smaller')
        guess_count += 1
    else:
        print ('mine is larger')
    guess = input  ('what is your guess? ')
    guess = int(guess)
    guess_count += 1
    if guess_count == 11:
        print ("bakhti ke!")

print ('DOROSTEEEEE')
print (guess_count)
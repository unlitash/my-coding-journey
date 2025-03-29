number1 = 0
count = 0
number1 = input ('please insert your first number: ')
number2 = input ('please insert the other number: ')
number1 = float (number1)
number2 = float (number2)
def barname():
   majmoo = number1 + number2
   count = count + 1 
   avrage = number1 / count
   return majmoo , avrage
while number1 or number2 != -1:
    print ("the sum of the numbers is: ", majmoo , "and the avrage is: ", avrage)
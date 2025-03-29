num1 = input ("please enter the first number: ")
num2 = input ("please enter the second number: ")
operation = input ("please enter your desired operation (above + , - , / , *): ")
if operation == "+":
    result = float(num1) + float(num2)
elif operation == "-":
        result = float(num1) - float(num2)
elif operation == "*":
          result = float(num1) * float(num2)
elif operation == "/":
           result = float(num1) / float(num2)
else:
        result ="the chosen operation is not correct"
print (result)
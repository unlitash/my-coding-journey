num1 = input ("please insert your first number: ")
num2 = input ("please insert your second number: ")
operation = input ("please chose one of the following operations below: +, -, *, /: ")

if operation == "+":
    result = float(num1) + float(num2)
elif operation == "-":
    result = float(num1) - float(num2)
elif operation == "*":
    result = float(num1) * float(num2)
elif operation == "/":
        result = float(num1) / float(num2)
else: result = "the chosen operation is not valid!"
print (result)
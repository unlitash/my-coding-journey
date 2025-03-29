name = input ("enter your name: ")
ID = input ("please enter your id: ")
if name == "ashkan" and ID == "0025196251":
    result = "welcome"
elif name == "ali" and ID == "0025196251" or "0020328990":
    result = "access granted, welcome"
else:
    result = "access denied"
print (result)

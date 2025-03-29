import random
o = 1
u = 100
hads = random.randint(o, u)
print (hads)
javab = input ('doroste? ')

while javab != "d":
    if javab == "b":
        o = hads
    if javab == "k":
        u = hads
    hads = random.randint(o, u)
    print (hads)
    javab = input ('doroste? ')

print ('EYVAAALLL KHEYLI HAL DAD :)')
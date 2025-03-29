zamin = [
    [100, 60],
    [500, 90],
    [105, 68]
]

for abaad in zamin:
    result = 1
    for mohit in abaad:
        result = (result * mohit)

while result == 7140:
    print ('the fiel is standard')
if result >= 7140:
    print ('the fiel is bigger than the standard')
elif result <= 7140:
    print ('the fiel is smaller than the stadard')
a = float (input ('chand saat kar mikoni? '))
b = float (input ('saati cheghad? '))

def daramade_roozane():
     c = float(a * b)
     return c
result = daramade_roozane()

def daramade_mahiane():
    d =(float (result) * 30)
    return d

result2 = daramade_mahiane()
print ('daramade roozanat: ', result ,  'daramade mahianat: ', result2)
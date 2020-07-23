import math
import cmath

edad = int(input('¡Hola! por favor dime cuántos años tiene tu perro: '))
edadp = 16 * math.log(edad) + 31
print('Tu perro tiene: ',int(edadp), 'años humanos' )

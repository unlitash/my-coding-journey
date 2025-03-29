// this app calculates the temperature in celsius and kelvin given fahrenheit
// fahrenheit to celsius = (32°F − 32) × 5/9 = 0°C

let fahrenheit = 70
let  celsius = (fahrenheit - 32) *5 / 9
console.log(fahrenheit + ', fahrenheit is: ' + celsius + ' celsuises')

// fahrenheit to kelvin = (32°F − 32) × 5/9 + 273.15 = 273.15K

let kelvin = (celsius + 273.15)
console.log(fahrenheit + ', fahrenheits is: ' + kelvin + ' kelvins' )
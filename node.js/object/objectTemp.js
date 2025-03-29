let tempcalc = function (tempreture) {
    return {
        kelvin: `${tempreture} in kelvin is ${(tempreture - 273.15) * 9/5 + 32} fahrenheits and ${tempreture - 273.15} in celsius`,
        celsius: `${tempreture} in celsius is ${(tempreture + 273.15)} kelvin and ${(tempreture * 9/5) + 32} in fahrenehits`,
        fahrenheit: `${tempreture} in fahrenheit is ${((tempreture - 32) * 5/9 + 273.15)} kelvin and ${(tempreture - 32) * 5/9} in celsius`,
    }
    
    
}

let inputTemp = tempcalc(50)
console.log(inputTemp.kelvin)
console.log(inputTemp.celsius)
console.log(inputTemp.fahrenheit)

const calc = function (name = "anonymous" , grade = 0 , Letter = "F" ){
const percentage = (grade * 100 / 20)
    
    if (percentage > 89){
        Letter = "A"
    } else if (percentage > 79){
        Letter = "B"
    } else if (percentage > 69){
        Letter = "C"
    } else if (percentage > 59){
        Letter = "D"
    } else {
        Letter = "F"
    }                
const message = (name + " got (" + percentage + "%): (" +  Letter + ")")
    return(message)
}

console.log(calc("ali" , 13))
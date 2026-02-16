let tomorrow = false;
let nextday = true;

if (tomorrow === true && (nextday === true)) {
    console.log("you got two days. go on a trip maybe?")
} else if ( tomorrow === true && (nextday === false)) {
    console.log("you got tomorrow to get some rest")
} else if ( tomorrow === false && (nextday === true)) {
    console.log("you got the day after tomorrow to get some rest")
} else if ( tomorrow === false && (nextday === false)) {
    console.log("hard week man... no holidays!")
}


// simpler

let farda
let pasfarda

if (farda && pasfarda) {
    console.log("you got two days of holiday")
} else if (farda || pasfarda) {
    console.log("you got one day to rest")
} else {
    console.log("no days off")
}

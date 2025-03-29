let age = 24;
let BP = 94;

if (age > 0 && age < 1 && (BP > 100 && BP < 75) ) {
    console.log("your blood pressure is in the normal range")
} else if (age >= 1 && age <= 5 && (BP > 110 && BP < 80) ) {
    console.log("your blood pressure is in the normal range")}
    else if (age >= 6 && age <= 13 && (BP > 90 && BP < 115) ) {
        console.log("your blood pressure is in the normal range")}
        else if (age >= 14 && age <= 19 && (BP > 105 && BP < 120) ) {
            console.log("your blood pressure is in the normal range")}
            else {
                console.log("visit a doctor as fast as possible")
            }
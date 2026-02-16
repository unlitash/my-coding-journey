let age = 19;
let BP = 119;

if ((age > 0 && age < 1 && (BP > 100 && BP < 75) ) ||
 (age >= 1 && age <= 5 && (BP > 110 && BP < 80) ) || 
 (age >= 6 && age <= 13 && (BP > 90 && BP < 115) ) || 
 (age >= 14 && age <= 19 && (BP > 105 && BP < 120) ) ||
 (age >= 20 && age <= 24 && (BP > 90 && BP < 115) ) || 
 (age >= 25 && age <= 29 && (BP > 90 && BP < 115) ) || 
 (age >= 30 && age <= 34 && (BP > 90 && BP < 115) ) || 
 (age >= 35 && age <= 39 && (BP > 90 && BP < 115) ) || 
 (age >= 40 && age <= 44 && (BP > 90 && BP < 115) ) || 
 (age >= 45 && age <= 49 && (BP > 90 && BP < 115) ) || 
 (age >= 50 && age <= 54 && (BP > 90 && BP < 115) ) || 
 (age >= 55 && age <= 59 && (BP > 90 && BP < 115) ) || 
 (age >= 60 && age <= 64 && (BP > 90 && BP < 115) )) {
    console.log("your blood pressure is in the normal range")
} 
else {
    console.log("visit a doctor as fast as possible")
}  
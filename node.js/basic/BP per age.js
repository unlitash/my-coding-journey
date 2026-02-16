let age = 19; let BP = 500; 
const normalRange = { 
    "0-1": [100, 75], 
    "1-5": [110, 80], 
    "6-13": [90, 115], 
    "14-19": [105, 120], 
    "20-24": [90, 115], 
    "25-29": [90, 115], 
    "30-34": [90, 115], 
    "35-39": [90, 115], 
    "40-44": [90, 115], 
    "45-49": [90, 115], 
    "50-54": [90, 115], 
    "55-59": [90, 115], 
    "60-64": [90, 115], }; 
    
    const getAgeRange = age => { 
        if (age > 0 && age < 1) return "0-1";
        if (age >= 1 && age <= 5) return "1-5"; 
        if (age >= 6 && age <= 13) return "6-13"; 
        if (age >= 14 && age <= 19) return "14-19"; 
        if (age >= 20 && age <= 24) return "20-24"; 
        if (age >= 25 && age <= 29) return "25-29"; 
        if (age >= 30 && age <= 34) return "30-34"; 
        if (age >= 35 && age <= 39) return "35-39"; 
        if (age >= 40 && age <= 44) return "40-44"; 
        if (age >= 45 && age <= 49) return "45-49"; 
        if (age >= 50 && age <= 54) return "50-54"; 
        if (age >= 55 && age <= 59) return "55-59"; 
        if (age >= 60 && age <= 64) return "60-64"; 
        return null;
     };
      const monitorBloodPressure = (age, BP) => { const ageRange = getAgeRange(age);
         if (ageRange) { const [minBP, maxBP] = normalRange[ageRange];
             if (BP >= minBP && BP <= maxBP) { console.log("Your blood pressure is in the normal range.");

              } else {
                 const difference = BP < minBP ? minBP - BP : BP - maxBP; 
                 console.log(`Visit a doctor as fast as possible. Your blood pressure is off by ${difference}.`); 
                } } else { console.log("Age out of range for this evaluation.");

                }
            };
            monitorBloodPressure(age, BP);

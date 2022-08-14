function calcBmi(weight,height){
    var bmi = (weight/height*height)
    if (bmi <= 18.5){
        console.log("Underweight")
    }
    else if(bmi <= 25.0){
        console.log("Normal")
    }
    else if(bmi <= 30.0){
        console.log("Overweight")
    }
    else if(bmi > 30){
        console.log("Obese")
    }
    else {
        console.log("Insert a valid value")
    }
    }
calcBmi(74, 171)

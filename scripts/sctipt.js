// exercise1

function square(num){
    return num * num
}

console.log(square(10));

//exercise2

function farengate(celsius){
    return celsius * 9/5 + 32;
};

console.log(farengate(5));


// exercise3

function range(num, range1, range2){
    if(typeof num !== typeof 1 || typeof range1 !== typeof 1 || typeof range2 !== typeof 1){
        return `They must be numbers`;
    }

    if(num >= range1 && num <= range2){
        return `The number ${num} is in user's number's range`;
    }else{
        return `The number ${num} isn't in user's number's range`;
    };
};


// exercise4

function year1(year){
    if (year % 4 == 0) {
        return true;
    }else{
        return false;
    }
}

console.log(year1(2024));


// exercise5

let num1 = calculator(prompt("Enter number1: "));
let num2 = calculator(prompt("Enter number2: "));
let operation = prompt("Enter math operation(+, - / or *): ");

function calculator(num1, num2, operation){
    switch(operation){
        case "+":
            return num1 + num2;
            break;
        
        case "-":
            return num1 - num2;
            break;
        
        case "/":
            return num1 / num2;
            break;
        
        case "*":
            return num1 * num2;   
    }
}

console.log(calculator(num1, num2, operation));
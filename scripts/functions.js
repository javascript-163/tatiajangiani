function calculator(number1, number2, action)
{
    if (action === "+") {
        return number1 + number2
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };
}

calculator(4, 5, "+")
console.log()


let calculator1 = (number1, number2, action)
=>  {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };   
}

console.log(calculator(1,2,"*"))
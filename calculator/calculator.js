function display(num1, char, num2) {
    if (char === '+') {
        return num1 + num2;
    } else if (char === '-') {
        return num2 - num1;
    } else if (char === '*') {
        return num2 * num1;
    } else if (char === '/') {
        if (num1 !== 0) {
            return num2 / num1;
        } else {
            return "Cannot divide by zero";
        }
    } else {
        return "Invalid Operator";
    }
}

let num1 = parseInt(prompt("Enter number 1: "));
let sym = prompt("Enter operator (+, -, *, /): "); // Changed to prompt for string
let num2 = parseInt(prompt("Enter number 2: "));

let result = display(num1, sym, num2);
document.write(result);

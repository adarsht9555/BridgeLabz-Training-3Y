let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];

let answer;

switch (operator) {
    case "+":
        answer = number1 + number2;
        break;

    case "-":
        answer = number1 - number2;
        break;

    case "*":
        answer = number1 * number2;
        break;

    case "/":
        answer = number1 / number2;
        break;
}

if (operator === "/") {
    answer = answer.toFixed(2);
}

console.log(`Question: ${number1} ${operator} ${number2} = ?`);
console.log(`Correct Answer: ${answer}`);

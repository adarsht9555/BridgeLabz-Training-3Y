'use strict';

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract", "unknownOp"];
const num1 = 25, num2 = 0;

console.log("=== SMART CALCULATOR ===");

function calculate(op, a, b) {
    switch (op) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "power":
            return Math.pow(a, b);
        case "divide":
            if (b === 0) {
                throw new Error("DivisionByZeroError: Cannot divide by zero.");
            }
            return a / b;
        case "root":
            if (a < 0) {
                throw new Error("NegativeRootError: Cannot calculate square root of a negative number.");
            }
            return Math.sqrt(a);
        default:
            throw new InvalidOperationError(`InvalidOperationError: Operation '${op}' is not recognized.`);
    }
}

operations.forEach(op => {
    try {
        const result = calculate(op, num1, num2);
        console.log(`[SUCCESS] Operation '${op}' (${num1}, ${num2}) => Result: ${result}`);
    } catch (err) {
        console.log(`[FAILED]  Operation '${op}' (${num1}, ${num2}) => ${err.name}: ${err.message}`);
    }
});

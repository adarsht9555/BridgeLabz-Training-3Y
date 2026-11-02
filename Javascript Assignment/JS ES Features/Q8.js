'use strict';

console.log("=== STRICT MODE SHOWDOWN ===");

function demoCorrect(a, b) {
    let total = 10;
    console.log(`Param a: ${a}, Param b: ${b}, Local total: ${total}`);
    return total + a + b;
}

const result = demoCorrect(5, 10);
console.log("Execution Result:", result);

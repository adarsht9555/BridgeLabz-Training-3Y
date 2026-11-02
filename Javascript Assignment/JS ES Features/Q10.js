'use strict';

console.log("=== NESTED HOISTING AND CLOSURES ===");

function outer() {
    let count = 5;
    console.log("Outer Scope Count:", count);

    const inner = () => {
        let innerCount = 10;
        console.log("Inner Arrow Function Scope - Outer Count:", count, "| Inner Count:", innerCount);
    };

    inner();
}

outer();

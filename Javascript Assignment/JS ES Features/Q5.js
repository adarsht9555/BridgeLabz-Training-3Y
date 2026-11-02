'use strict';

console.log("=== HOISTING LAB: SEQUENCE TRAP ===");

let score;
score = 50;
console.log("Score:", score);

announce();

function announce() {
    console.log("Game started");
}

let statusVal = "ready";

const startGame = () => {
    console.log("Status:", statusVal);
};

startGame();

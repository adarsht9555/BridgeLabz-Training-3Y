'use strict';

console.log("=== PYRAMID PATTERN GENERATOR ===");

function generatePyramid(rows = 5) {
    const totalRows = Number(rows) || 5;

    for (let i = 1; i <= totalRows; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            if (j === 1) {
                line += "*";
            } else {
                line += " - *";
            }
        }
        console.log(line);
    }
}

generatePyramid(4);

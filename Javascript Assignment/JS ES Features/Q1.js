'use strict';

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

console.log("=== DYNAMIC DATA PARSER REPORT ===");

for (let i = 0; i < apiData.length; i++) {
    const raw = apiData[i];
    
    const numForm = Number(raw);
    const boolForm = Boolean(raw);
    const stringForm = String(raw);

    console.log(`
Item [${i}]: Raw = ${JSON.stringify(raw)}`);
    console.log(`  -> String Form: "${stringForm}"`);
    console.log(`  -> Boolean Form: ${boolForm}`);
    console.log(`  -> Number Form: ${numForm}`);

    const isInvalidNumber = 
        typeof raw === 'symbol' ||
        raw === null ||
        raw === undefined ||
        Number.isNaN(numForm) ||
        (typeof raw === 'string' && raw.trim() === '') ||
        (typeof raw === 'string' && isNaN(raw));

    if (isInvalidNumber) {
        invalidNumericData.push({ index: i, rawValue: raw, parsedAsNumber: numForm });
        console.log(`  [STATUS]: Invalid numeric data. Categorized into invalid array.`);
    } else {
        validNumericData.push({ index: i, rawValue: raw, numericValue: numForm });
        console.log(`  [STATUS]: Valid numeric data. Categorized into valid array.`);
    }
}

console.log("
=================================");
console.log("Valid Numeric Data Array:", validNumericData);
console.log("Invalid Numeric Data Array:", invalidNumericData);

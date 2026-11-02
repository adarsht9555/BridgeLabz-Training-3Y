'use strict';

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];

console.log("=== JSON AUDIT ===");

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;
    const rawString = rawData[i];

    try {
        let parsed;
        try {
            parsed = JSON.parse(rawString);
        } catch (parseError) {
            throw new Error(`Syntax Error: Malformed JSON at line ${lineNumber} -> ${parseError.message}`);
        }

        if (parsed.user === undefined) {
            throw new Error(`Schema Error: Missing required key 'user' at line ${lineNumber}`);
        }

        if (parsed.age === undefined) {
            throw new Error(`Schema Error: Missing required key 'age' at line ${lineNumber}`);
        }

        const ageNum = Number(parsed.age);
        if (Number.isNaN(ageNum)) {
            throw new Error(`Validation Error: Key 'age' is not a valid number at line ${lineNumber}`);
        }

        parsed.age = ageNum;

        cleanData.push(parsed);
        console.log(`[SUCCESS] Line ${lineNumber}: Parsed user ${parsed.user}, age ${parsed.age}`);

    } catch (err) {
        console.error(`[ERROR] Line ${lineNumber}: ${err.message}`);
    }
}

const adultUsers = cleanData.filter(u => u.age >= 18);

console.log("
=== SUMMARY ===");
console.log("Clean Data Array:", cleanData);
console.log("Filtered Adult Users (Age >= 18):", adultUsers);

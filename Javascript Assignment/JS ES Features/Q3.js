'use strict';

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("=== TRANSACTION VALIDATOR ===");

for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];

    try {
        if (tx === null || tx === undefined) {
            throw new Error("Null or undefined transaction entry encountered.");
        }

        if (tx.id === undefined || tx.id === null) {
            throw new Error("Missing transaction ID.");
        }

        if (tx.amount === undefined || tx.amount === null) {
            throw new Error(`Transaction ID ${tx.id} is missing an amount.`);
        }

        if (typeof tx.amount !== 'number' || Number.isNaN(tx.amount)) {
            throw new Error(`Transaction ID ${tx.id} has an invalid non-numeric amount.`);
        }

        if (tx.amount < 0) {
            throw new Error(`Transaction ID ${tx.id} has a negative amount (${tx.amount}).`);
        }

        validTransactions.push(tx);
        console.log(`[VALID] Transaction ID ${tx.id}: Amount = $${tx.amount}`);

    } catch (err) {
        invalidTransactions.push({ entry: tx, error: err.message, index: i });
        console.log(`[INVALID] Index ${i}: ${err.message}`);
    }
}

console.log("
=== FINAL TRANSACTION REPORT ===");
console.log(`Successful Transactions Count: ${validTransactions.length}`);
console.log(`Failed Transactions Count:     ${invalidTransactions.length}`);
console.log("Valid Transactions Array:", validTransactions);
console.log("Invalid Transactions Array:", invalidTransactions);

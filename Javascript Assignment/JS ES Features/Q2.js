'use strict';

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== EMPLOYEE BONUS CALCULATOR ===");

function processEmployees(empList) {
    for (let i = 0; i < empList.length; i++) {
        try {
            const emp = empList[i];

            if (!emp || typeof emp.name !== 'string' || emp.salary === undefined || emp.years === undefined) {
                throw new Error(`Missing required properties for employee record at index ${i}`);
            }

            const salaryNum = Number(emp.salary);
            const yearsNum = Number(emp.years);

            if (Number.isNaN(salaryNum) || Number.isNaN(yearsNum)) {
                throw new Error(`Failed to convert salary or years to a valid number for ${emp.name}`);
            }

            const bonusRate = yearsNum > 3 ? 0.10 : 0.05;
            const bonusAmount = salaryNum * bonusRate;
            const totalPayout = salaryNum + bonusAmount;

            console.log(`Employee: ${emp.name} | Experience: ${yearsNum} yrs | Base Salary: $${salaryNum.toFixed(2)} | Bonus: $${bonusAmount.toFixed(2)} (${bonusRate * 100}%) | Total Payout: $${totalPayout.toFixed(2)}`);
        } catch (error) {
            console.error(`[ERROR] Processing failed at index ${i}: ${error.message}`);
        }
    }
}

processEmployees(employees);

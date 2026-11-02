let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;

    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Total Salary: " + salary);
    console.log("Global Bonus: " + bonus);
}

calculateSalary(true);
calculateSalary(false);

bonus = 7000;

console.log("Updated Global Bonus: " + bonus);
calculateSalary(true);

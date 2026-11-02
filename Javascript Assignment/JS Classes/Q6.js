class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent > 0) {
            const bonusAmount = (this.salary * percent) / 100;
            this.salary += bonusAmount;
            console.log(`Bonus of ${percent}% applied to ${this.name}. New monthly salary: $${this.salary}`);
        }
    }
}

const employees = [
    new Employee(1, "John Doe", "Engineering", 5000),
    new Employee(2, "Jane Smith", "Marketing", 4200),
    new Employee(3, "Robert Johnson", "Sales", 3800),
    new Employee(4, "Emily Davis", "HR", 4000),
    new Employee(5, "Michael Brown", "Engineering", 6000)
];

console.log("=== Employee Annual Salaries ===");
employees.forEach(emp => {
    console.log(`${emp.name} (${emp.department}): Monthly = $${emp.salary}, Annual = $${emp.getAnnualSalary()}`);
});

const totalAnnualPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);

console.log(`\nTotal Annual Company Payout: $${totalAnnualPayout.toLocaleString()}`);

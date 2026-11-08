class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return `${this.name} (${this.department}) is doing assigned tasks.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} (${this.department}) is managing the team and planning projects.`;
    }
}

// Runtime polymorphism: same call, behaviour decided by actual object type
[new Employee("Amit", "IT"), new Manager("Neha", "HR"), new Manager("Raj", "Finance")]
    .forEach((e) => { console.log(e.work()); });

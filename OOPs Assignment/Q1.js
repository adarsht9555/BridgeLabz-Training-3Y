class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    calculateAverage() {
        return this.marks.reduce((sum, m) => { return sum + m; }, 0) / this.marks.length;
    }
    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 80) { return "A"; }
        if (avg >= 60) { return "B"; }
        if (avg >= 40) { return "C"; }
        return "F";
    }
}

[new Student("Adarsh", [90, 85, 88]), new Student("Riya", [65, 70, 62]), new Student("Karan", [30, 35, 28])]
    .forEach((s) => {
        console.log(`${s.name}: Avg = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`);
    });

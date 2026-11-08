class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) { throw new Error("Dataset is empty."); }
        this.data = data;
    }
    getActiveUsers() {
        return this.data.filter((d) => { return d.steps > 7000; });
    }
    getAverageCalories() {
        return this.data.reduce((s, d) => { return s + d.calories; }, 0) / this.data.length;
    }
    getUserSummary() {
        return this.data.map((d) => { return `User ${d.user} walked ${d.steps} steps and burned ${d.calories} calories.`; });
    }
}

const data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];
const fa = new FitnessAnalytics(data);
console.log("Active users:", fa.getActiveUsers().map((u) => { return u.user; }));
console.log("Average calories:", fa.getAverageCalories());
fa.getUserSummary().forEach((m) => { console.log(m); });

try {
    new FitnessAnalytics([]);
} catch (e) {
    console.log("Error:", e.message);
}

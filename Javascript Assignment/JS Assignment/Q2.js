let userName = "Adarsh";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let student = { name: "Adarsh", course: "B.Tech CSE" };
let middleName = null;
let address;
let report = [
    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "Age",
        Value: age,
        Type: typeof age
    },
    {
        Label: "Is Student",
        Value: isStudent,
        Type: typeof isStudent
    },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        Label: "Student Object",
        Value: JSON.stringify(student),
        Type: typeof student
    },
    {
        Label: "Middle Name",
        Value: String(middleName),
        Type: middleName === null ? "null" : typeof middleName
    },
    {
        Label: "Address",
        Value: String(address),
        Type: typeof address
    }
];
console.table(report);

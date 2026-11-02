function validateLogin(username, password) {
    const usernameRegex = /^.{5,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    const errors = [];

    if (!usernameRegex.test(username)) {
        errors.push("Username must be at least 5 characters long.");
    }

    if (!passwordRegex.test(password)) {
        errors.push("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.");
    }

    if (errors.length === 0) {
        console.log("Login Successful! Welcome, " + username);
        return { success: true };
    } else {
        console.log("Login Failed:");
        errors.forEach(err => console.log(`- ${err}`));
        return { success: false, errors: errors };
    }
}

console.log("--- Test Case 1: Valid Credentials ---");
validateLogin("john_doe", "SecureP@ss123");

console.log("\n--- Test Case 2: Invalid Username & Password ---");
validateLogin("usr", "pass");

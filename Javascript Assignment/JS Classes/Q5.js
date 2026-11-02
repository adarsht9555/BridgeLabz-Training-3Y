function bookTicket(name, email, seats) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numSeats = parseInt(seats, 10);

    let isValid = true;
    let errors = [];

    if (!nameRegex.test(name)) {
        isValid = false;
        errors.push("Invalid Name: Only alphabets allowed.");
    }

    if (!emailRegex.test(email)) {
        isValid = false;
        errors.push("Invalid Email: Format must be example@domain.com.");
    }

    if (isNaN(numSeats) || numSeats < 1 || numSeats > 10) {
        isValid = false;
        errors.push("Invalid Seats: Selection must be between 1 and 10.");
    }

    if (isValid) {
        const bookingDetails = {
            name: name,
            email: email,
            seats: numSeats,
            bookingTime: new Date().toLocaleString()
        };
        console.log("=== Booking Successful ===");
        console.log(bookingDetails);
        return bookingDetails;
    } else {
        console.log("=== Booking Failed ===");
        errors.forEach(err => console.log(`- ${err}`));
        return null;
    }
}

console.log("--- Test Case 1: Valid Booking ---");
bookTicket("Alice Smith", "alice@example.com", 4);

console.log("\n--- Test Case 2: Invalid Inputs ---");
bookTicket("Alice123", "invalid-email", 15);

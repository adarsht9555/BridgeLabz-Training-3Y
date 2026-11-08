class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Invalid distance: must be provided and non-negative.");
        }
        return 50 + this.distance * 12;
    }
}

const driver = new Driver("Suresh", 4.8, { model: "Swift Dzire", number: "UP80 AB 1234" });
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicle.model}`);

[new Trip("Lucknow", "Kanpur", 80), new Trip("Agra", "Mathura", -5), new Trip("Delhi", "Noida")]
    .forEach((t) => {
        try {
            console.log(`${t.fromLocation} -> ${t.toLocation}: Rs.${t.calculateFare()}`);
        } catch (e) {
            console.log(`${t.fromLocation} -> ${t.toLocation}: Error - ${e.message}`);
        }
    });

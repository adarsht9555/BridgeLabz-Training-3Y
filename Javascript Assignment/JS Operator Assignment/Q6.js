let count = 0;

function increment() {
    count++;
    console.log("Count after increment: " + count);
}

function decrement() {
    count--;
    console.log("Count after decrement: " + count);
}

function counterDetails() {
    function displayCount() {
        console.log("Current count inside nested function: " + count);
    }

    displayCount();
}

increment();
increment();
decrement();
counterDetails();

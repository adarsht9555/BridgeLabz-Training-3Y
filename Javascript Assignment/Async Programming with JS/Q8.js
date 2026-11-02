function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Submission failed");
            } else {
                resolve("Order submitted successfully");
            }
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            let result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            console.log(result);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    throw new Error("Order could not be processed");
}

processOrder().catch(error => {
    console.log(error.message);
});
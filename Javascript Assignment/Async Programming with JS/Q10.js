function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Reason:", error.message);
    }
}

runPipeline();
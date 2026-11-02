function prepareStep(stepName) {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(`${stepName} failed!`);
            } else {
                console.log(stepName);
                resolve();
            }
        }, delay);
    });
}

prepareStep("Water boiled")
    .then(() => prepareStep("Coffee brewed"))
    .then(() => prepareStep("Coffee poured into cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Error:", error));
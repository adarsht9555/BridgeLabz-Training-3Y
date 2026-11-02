function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("API request failed!");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        let bugReport = bugs.map((bug, index) => ({
            "Bug No.": index + 1,
            "Bug Description": bug
        }));

        console.table(bugReport);
    })
    .catch(error => {
        console.log("Error:", error);
    });
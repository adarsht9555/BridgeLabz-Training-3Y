function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject("Profile failed")
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject("Posts failed")
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject("Messages failed")
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    let startTime = Date.now();

    let results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    let endTime = Date.now();

    results.forEach((result, index) => {
        let modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(`${modules[index]}: Success - ${result.value}`);
        } else {
            console.log(`${modules[index]}: Failed - ${result.reason}`);
        }
    });

    console.log(`Total time: ${endTime - startTime} ms`);
}

loadDashboard();
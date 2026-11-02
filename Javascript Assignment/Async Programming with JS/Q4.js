function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`${serverName} deployment failed`);
            } else {
                resolve(`${serverName} deployment successful`);
            }
        }, delay);
    });
}

let serverA = deployServer("Server A", 2000);
let serverB = deployServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.log("Deployment error:", error);
    });

Promise.race([serverA, serverB])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Fastest response failed:", error);
    });
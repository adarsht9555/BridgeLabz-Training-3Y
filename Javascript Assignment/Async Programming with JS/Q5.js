function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

function callbackPipeline() {
    console.log("Callback Pipeline Started");

    runStage("Design completed", () => {
        runStage("Build completed", () => {
            runStage("Testing completed", () => {
                runStage("Deployment completed", () => {
                    runStage("Celebrate!", () => {
                        console.log("Callback Pipeline Finished");
                    });
                });
            });
        });
    });
}

function asyncStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function asyncPipeline() {
    console.log("Async/Await Pipeline Started");

    await asyncStage("Design completed");
    await asyncStage("Build completed");
    await asyncStage("Testing completed");
    await asyncStage("Deployment completed");
    await asyncStage("Celebrate!");

    console.log("Async/Await Pipeline Finished");
}

asyncPipeline();
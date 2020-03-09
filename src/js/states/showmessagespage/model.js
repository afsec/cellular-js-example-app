const stateShowMessagesPageModel = () => {
    debug(`stateShowMessagesPageModel()`)

    const workerMessage = {
        "state": `${currentState}`,
        "dataset": "permissions",
        "command": "readAll",
        "data": null
    }

    // Send message to worker
    mainWorker.postMessage(workerMessage);

    // Receive message from worker
    mainWorker.onmessage = (e) => {
        console.log(e.data);
    }

    return {}
}


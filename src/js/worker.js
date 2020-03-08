'use strict';
/* worker.js */

const DEBUG = true

const debug = message => ((typeof (DEBUG) !== 'undefined') && (DEBUG === true)) ? (typeof (message) !== 'undefined') ? console.log(message) : false : false

const getArrIdx = (arr, id) => {
    debug('getArrIdx()')
    if (Array.isArray(arr)) {
        if (typeof (id) === 'number') {
            if (arr.length > 0) {
                const idx = arr.findIndex(item => item.id === (id / 1))
                if (idx > -1) {
                    return idx
                } else {
                    debug('getArrIdx(): ERROR -> Not Found')
                }
            } else {
                debug('getArrIdx(): ERROR -> Array empty')
            }
        } else {
            debug('getArrIdx(): ERROR -> Type mismatch: id')
        }
    } else {
        debug('getArrIdx(): ERROR -> Type mismatch: arr')
    }
}

// Worker Internal State
const databaseData = {
    "metadata": {},
    "tables": [
        {
            "id": 1,
            "name": "permissions",
            "metadata": {},
            "data": [
                {
                    "id": 1,
                    "name": "Administrator"
                },
                {
                    "id": 2,
                    "name": "Technical"
                },
                {
                    "id": 3,
                    "name": "User"
                },

            ]
        },
        {
            "id": 2,
            "name": "departments",
            "metadata": {},
            "data": [
                {
                    "id": 1,
                    "name": "IT"
                },
                {
                    "id": 2,
                    "name": "Accounting"
                },
                {
                    "id": 3,
                    "name": "Marketing"
                },

            ]
        },
        {
            "id": 3,
            "name": "users",
            "metadata": {},
            "data": [
                {
                    "id": 1,
                    "name": "Charlie Root",
                    "email": "root@example.net",
                    "department": 1,
                    "permission": 1
                },
                {
                    "id": 2,
                    "name": "John Doe",
                    "email": "john@example.net",
                    "department": 1,
                    "permission": 2
                },
                {
                    "id": 3,
                    "name": "Alice Stark",
                    "email": "alice@example.net",
                    "department": 3,
                    "permission": 3
                },
                {
                    "id": 4,
                    "name": "Tony Coast",
                    "email": "tony@example.net",
                    "department": 2,
                    "permission": 3
                },
                {
                    "id": 5,
                    "name": "Jack Parker",
                    "email": "jack@example.net",
                    "department": 2,
                    "permission": 3
                },
            ]
        },
    ]
}

const isValidDataset = tableName => {
    debug('isValidDataset()')
    if (typeof (tableName) === "string") {
        if (databaseData["tables"].findIndex(item => item["name"] === tableName) > -1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

var messageQueue = []

const messageDispatcher = message => {
    debug('messageDispatcher()')
    if (typeof (message["dataset"]) === "string") {
        if (isValidDataset(message["dataset"])) {
            debug('FOUND:')
            debug(message)
        } else {
            debug('NOT found:')
            debug(message)
        }
    } else {
        debug('messageDispatcher: error message["dataset"]')
    }
}


const messageQueueIsEmpty = () => messageQueue.length === 0 ? true : false
const messageEnqueue = message => messageQueue.push(message)
const messageDequeue = () => messageQueue.shift()
const messageDequeueAll = () => messageQueue.forEach(() => messageDispatcher(messageDequeue()))

////////////////////////////////////////////////////


// Receive message from main file
self.onmessage = (e) => {
    debug('messageEnqueue()')
    const workerResult = messageEnqueue(e.data)
    // Send message to main file
    self.postMessage(workerResult);
}

setInterval(() => {
    if (!messageQueueIsEmpty()) {
        debug('messageDenqueueAll()')
        messageDequeueAll()
    }
}, 1000);
const stateShowMessagesPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowMessagesPage()`)
    const currentState = "ShowMessagesPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "Dispatcher"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowMessagesPagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}


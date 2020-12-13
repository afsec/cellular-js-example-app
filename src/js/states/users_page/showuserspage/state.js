const stateShowUsersPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPage()`)
    const currentState = "ShowUsersPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "Dispatcher"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}


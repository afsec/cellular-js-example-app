const stateShowUsersPageNewUser = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPageNewUser()`)
    const currentState = "ShowUsersPageNewUser"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowUsersPage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPageNewUserPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}


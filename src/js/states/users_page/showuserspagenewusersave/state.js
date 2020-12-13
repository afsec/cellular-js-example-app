const stateShowUsersPageNewUserSave = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPageNewUserSave()`)
    const currentState = "ShowUsersPageNewUserSave"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowUsersPageNewUser"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPageNewUserSavePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}


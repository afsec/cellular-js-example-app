const stateShowUsersPageUpdateUser = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPageUpdateUser()`)
    const currentState = "ShowUsersPageUpdateUser"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowUsersPageShowModal"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPageUpdateUserPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

